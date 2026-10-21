const panel = document.querySelector('#download-stats');

if (panel) {
  const count = panel.querySelector('#download-count');
  const status = panel.querySelector('#download-status');
  const refresh = panel.querySelector('#refresh-downloads');
  const interval = 5 * 60 * 1000;
  const cacheKey = `release-downloads:${panel.dataset.api}:${panel.dataset.asset}`;
  let previous = null;
  let pending = false;

  const isValid = data => Number.isSafeInteger(data?.count) && data.count >= 0
    && Number.isFinite(data?.checkedAt) && data.checkedAt > 0 && data.checkedAt <= Date.now();
  const checkedTime = timestamp => new Intl.DateTimeFormat('zh-CN', {
    month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false,
  }).format(timestamp);

  function show(data, cached = false) {
    count.textContent = new Intl.NumberFormat('zh-CN').format(data.count);
    status.textContent = `${cached ? '上次查询' : '查询于'} ${checkedTime(data.checkedAt)} · 本地时间`;
  }

  // Storage may be unavailable in private browsing or when the user blocks it.
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey));
    if (isValid(cached)) {
      previous = cached;
      show(cached, true);
    }
  } catch { /* Live queries also work without a local cache. */ }

  async function update() {
    if (pending) return;
    pending = true;
    refresh.disabled = true;
    panel.setAttribute('aria-busy', 'true');
    status.textContent = previous ? '正在更新 · 保留上次查询结果…' : '正在读取 GitHub 统计…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(panel.dataset.api, {
        headers: {Accept: 'application/vnd.github+json'},
        credentials: 'omit', cache: 'no-cache', signal: controller.signal,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const release = await response.json();
      const asset = release.assets?.find(item => item.name === panel.dataset.asset && item.state === 'uploaded');
      const result = {count: asset?.download_count, checkedAt: Date.now()};
      if (!isValid(result)) throw new Error('No valid download count');
      previous = result;
      show(result);
      try { localStorage.setItem(cacheKey, JSON.stringify(result)); } catch { /* Optional cache. */ }
    } catch {
      status.textContent = previous
        ? `暂未更新 · 显示 ${checkedTime(previous.checkedAt)} 的查询结果`
        : '暂时无法获取统计，请稍后刷新。';
    } finally {
      clearTimeout(timeout);
      pending = false;
      refresh.disabled = false;
      panel.setAttribute('aria-busy', 'false');
    }
  }

  refresh.addEventListener('click', update);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && (!previous || Date.now() - previous.checkedAt >= interval)) update();
  });
  setInterval(() => { if (!document.hidden) update(); }, interval);
  update();
}
