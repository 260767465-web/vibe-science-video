const styles = [
  {name:'手绘线稿',en:'DRAWN BY HAND',category:'paper',skin:'paper',description:'用少量线条和手写感标注，把思考过程画出来。',use:'抽象概念的逐步解释、轻松的知识笔记。',motion:'路径逐段描边，箭头跟随解释出现；保留少量不规则感。',kind:'draw'},
  {name:'信息贴纸',en:'STICKER NOTES',category:'paper',skin:'stickers',description:'像在桌面整理想法，用标签与小卡片建立关系。',use:'要点归纳、概念分类、操作步骤。',motion:'卡片依次贴入，轻微回弹；强调层级，避免满屏同时弹跳。',kind:'sticker'},
  {name:'拼贴叙事',en:'CUT & CONNECT',category:'paper',skin:'collage',description:'用裁切形状、纸片与图文片段拼出叙事。',use:'发展简史、人物故事、带有资料感的解释。',motion:'纸片滑入与遮罩揭示，保留清晰阅读时间。',kind:'collage'},
  {name:'像素风',en:'PIXEL LOGIC',category:'paper',skin:'pixel',description:'把系统化知识变成像素地图或小型游戏界面。',use:'计算机知识、规则演示、怀旧类主题。',motion:'使用离散位移与少量帧切换，让文字保持足够大。',kind:'pixel'},
  {name:'竖屏字幕',en:'WORDS IN MOTION',category:'paper',skin:'captions',description:'围绕短句和关键词建立节奏，让文字带着信息走。',use:'短视频观点解释、轻量知识问答。',motion:'短句分组进入，关键词适度放大；字幕留在安全区域。',kind:'caption'},
  {name:'扁平几何',en:'CLEAR GEOMETRY',category:'geometry',skin:'flat',description:'用圆、矩形与连接线，表达简洁而清楚的因果关系。',use:'工作原理、流程、分类与数量关系。',motion:'沿因果顺序移动对象，颜色变化对应状态变化。',kind:'flat'},
  {name:'暗底金线',en:'LIGHT ON DARK',category:'geometry',skin:'gold',description:'暗色背景与克制的细线，聚焦结构而非装饰。',use:'系统结构、精密原理、沉静的知识解释。',motion:'细线描边和局部高亮，避免堆叠光效。',kind:'gold'},
  {name:'包豪斯构成',en:'FORM & ORDER',category:'geometry',skin:'bauhaus',description:'用基础几何、明确对齐和高对比色建立秩序。',use:'逻辑关系、设计知识、模块化系统。',motion:'几何块沿网格滑动、旋转和重组，控制节奏。',kind:'bauhaus'},
  {name:'图形变形',en:'ONE BECOMES ANOTHER',category:'geometry',skin:'morph',description:'让对象从一种形态自然变成另一种形态。',use:'状态转变、概念联系、连续变化。',motion:'选用能解释含义的变形；必要时用标签守住对象身份。',kind:'morph'},
  {name:'柔和 3D',en:'SOFT VOLUME',category:'space',skin:'soft',description:'用柔和体积与光影，让抽象对象更容易被感知。',use:'物体关系、简化装置、轻松的科学入门。',motion:'优先平移、缩放与小幅旋转；阴影方向保持一致。',kind:'soft'},
  {name:'等距空间',en:'ISOMETRIC SYSTEM',category:'space',skin:'iso',description:'以固定角度展开结构，像看一张可以运动的系统地图。',use:'网络、建筑、物流与多模块协作。',motion:'用路径移动和层层展开表达传递与结构，避免视角漂移。',kind:'iso'},
  {name:'科技 HUD',en:'SYSTEM ONLINE',category:'space',skin:'hud',description:'让标签、刻度和状态环组成一个清晰的信息界面。',use:'工程装置、系统状态、技术流程。',motion:'扫描、进度和数字变化必须有解释作用；示意数值要注明。',kind:'hud'},
  {name:'玻璃界面',en:'LAYERS OF GLASS',category:'space',skin:'glass',description:'通过半透明分层，让界面与信息产生轻盈的空间感。',use:'软件原理、信息层级、模块演示。',motion:'面板在少量层级间切换，文字对比优先于透明效果。',kind:'glass'},
  {name:'复古霓虹',en:'NEON AFTER HOURS',category:'effects',skin:'synth',description:'霓虹线条、深色空间与复古网格，营造鲜明氛围。',use:'数字文化、技术历史、带有时代感的选题。',motion:'控制发光范围，主信息保持稳定，避免持续闪烁。',kind:'synth'},
  {name:'流体渐变',en:'FLOWING IDEAS',category:'effects',skin:'fluid',description:'用连续的形状与颜色变化表达流动和过渡。',use:'扩散、能量、连接关系；需区分示意与真实模拟。',motion:'变化速度跟随解释，保留可识别的参照对象。',kind:'fluid'},
];

function artwork(kind) {
  const head='<svg viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
  const variants={
    draw:'<path d="M38 107Q48 37 98 55T157 92Q192 120 254 53M235 49l22 1-4 24" stroke="#28352c" stroke-width="2.5" stroke-linecap="round"/><circle cx="66" cy="77" r="26" stroke="#29362c" stroke-width="2"/><path d="m131 43 8-17m7 25 17-10" stroke="#ae6549" stroke-width="3"/><text x="176" y="132" fill="#344234" font-size="13">a little clearer.</text>',
    sticker:'<g transform="rotate(-9 83 82)"><rect x="28" y="35" width="101" height="91" rx="2" fill="#e8f68e" stroke="#36452d"/><path d="M45 60h55m-55 13h41m-41 13h47" stroke="#5e7547" stroke-width="3"/></g><g transform="rotate(12 197 75)"><rect x="154" y="40" width="97" height="78" rx="4" fill="#e49c7e" stroke="#603d32"/><circle cx="202" cy="80" r="19" stroke="#603d32" stroke-width="2"/><path d="m194 80 7 7 13-15" stroke="#603d32" stroke-width="3"/></g><path d="m117 116 29 8" stroke="#2a4330" stroke-width="2"/>',
    collage:'<g transform="rotate(-11 103 77)"><path d="m46 36 115 5-5 93-113-6Z" fill="#e9e5d6"/><path d="m66 103 27-41 33 53" fill="#799474"/><circle cx="123" cy="64" r="15" fill="#ce906e"/></g><g transform="rotate(8 201 86)"><rect x="145" y="47" width="105" height="70" fill="#253e36"/><path d="M161 68h72m-72 11h53m-53 11h62" stroke="#d7e0b6" stroke-width="3"/></g><path d="m87 25 26 3-3 17-26-3Z" fill="#bcad7b" opacity=".7"/>',
    pixel:'<path d="M40 120h20V100h20V80h20v20h20v20h20v-20h20V60h20v20h20v20h20V80h20V60h20" stroke="#d4ff76" stroke-width="8" stroke-linejoin="miter"/><path d="M42 30h10v10H42zM230 20h10v10h-10zM250 120h10v10h-10z" fill="#e5a678"/>',
    caption:'<rect x="107" y="7" width="86" height="146" rx="10" stroke="#778971"/><text x="150" y="60" text-anchor="middle" fill="#f1efe6" font-size="18" font-weight="700">一个问题</text><rect x="114" y="73" width="72" height="28" fill="#d4ff76"/><text x="150" y="93" text-anchor="middle" fill="#17232b" font-size="19" font-weight="700">讲清楚</text><path d="M122 119h56m-48 8h40" stroke="#7f9482" stroke-width="2"/>',
    flat:'<circle cx="67" cy="80" r="29" fill="#3c5f46"/><path d="M104 80h80m-10-8 10 8-10 8" stroke="#405b3f" stroke-width="2"/><rect x="208" y="51" width="58" height="58" rx="5" fill="#d7916b"/><circle cx="150" cy="80" r="12" fill="#f2eecf"/>',
    gold:'<circle cx="150" cy="80" r="49" stroke="#b8a36c"/><circle cx="150" cy="80" r="24" stroke="#b8a36c"/><path d="M45 80h55m100 0h55M150 14v17m0 98v17M78 28l33 29m78 46 32 28" stroke="#b8a36c"/><circle cx="150" cy="80" r="4" fill="#ead4a0"/>',
    bauhaus:'<rect x="50" y="30" width="69" height="98" fill="#263e37"/><circle cx="159" cy="64" r="34" fill="#bb5e3f"/><path d="M127 129a68 68 0 0 1 136 0Z" fill="#d0a944"/><path d="M221 24v77m13-77v77m13-77v77" stroke="#2c4537" stroke-width="4"/>',
    morph:'<circle cx="61" cy="80" r="25" stroke="#365846" stroke-width="2"/><path d="M110 61q0-13 13-13h30q13 0 13 13v36q0 13-13 13h-30q-13 0-13-13Z" fill="#7c9a65"/><rect x="208" y="53" width="54" height="54" fill="#bd7759"/><path d="m93 80 9-3v6Zm83 0 20-3v6Z" fill="#3a593e"/>',
    soft:'<defs><radialGradient id="ball"><stop stop-color="#f1f4da"/><stop offset="1" stop-color="#7b9476"/></radialGradient><linearGradient id="cube"><stop stop-color="#e5bb9d"/><stop offset="1" stop-color="#a77355"/></linearGradient></defs><ellipse cx="109" cy="124" rx="57" ry="9" fill="#788776" opacity=".3"/><circle cx="110" cy="76" r="43" fill="url(#ball)"/><rect x="172" y="54" width="57" height="63" rx="14" fill="url(#cube)"/>',
    iso:'<path d="m150 25 59 34-59 34-59-34Z" fill="#e7e5cd"/><path d="m91 59 59 34v52l-59-34Z" fill="#739376"/><path d="m150 93 59-34v52l-59 34Z" fill="#385b4b"/><path d="m36 112 31-17 31 17-31 18ZM219 112l31-17 31 17-31 18Z" stroke="#5c7857"/>',
    hud:'<g stroke="#7dc7b6"><circle cx="150" cy="80" r="42" stroke-dasharray="50 5 15 7"/><circle cx="150" cy="80" r="29" stroke-width=".6"/><path d="M35 43V29h42m146 0h42v14M35 117v14h42m146 0h42v-14M80 80h40m60 0h40M150 18v34m0 55v34"/></g><circle cx="150" cy="80" r="7" fill="#bcdf96"/><path d="M42 54h33m-33 7h21m150 48h43m-31 7h31" stroke="#568677" stroke-width="2"/>',
    glass:'<g transform="rotate(-8 128 80)"><rect x="61" y="36" width="125" height="90" rx="10" fill="#dfe9dc" fill-opacity=".13" stroke="#d9e4d8" stroke-opacity=".5"/></g><rect x="109" y="52" width="128" height="87" rx="10" fill="#e6f3de" fill-opacity=".22" stroke="#eff4e5" stroke-opacity=".7"/><circle cx="135" cy="78" r="9" fill="#d1edbb"/><path d="M155 76h59m-89 28h88m-88 13h64" stroke="#e7f1df" stroke-width="3" stroke-opacity=".6"/>',
    synth:'<circle cx="150" cy="63" r="36" fill="#d3979e"/><path d="M111 58h78m-78 9h78m-78 9h78m-78 9h78" stroke="#362143" stroke-width="4"/><path d="M25 140h250M40 123h220M60 110h180M150 98l-80 55m80-55-32 55m32-55 32 55m-32-55 80 55" stroke="#9b78b5"/><path d="m32 95 34-35 28 29m112 0 23-26 35 33" stroke="#b1d9c4"/>',
    fluid:'<defs><linearGradient id="flow"><stop stop-color="#385c5f"/><stop offset=".5" stop-color="#79a393"/><stop offset="1" stop-color="#e9d6b6"/></linearGradient></defs><path d="M40 95C20 30 118 23 143 54S219 9 256 64s-24 82-67 59S60 157 40 95Z" fill="url(#flow)"/><path d="M49 95c29-49 93-7 122-12s38-19 65-9" stroke="#e0eee0" stroke-opacity=".6" stroke-width="1.5"/>',
  };
  return head+(variants[kind] || variants.flat)+'</svg>';
}

const grid=document.querySelector('#style-grid');
const styleSelect=document.querySelector('#style-select');
const dialog=document.querySelector('#style-dialog');
let selectedStyle=styles.find(s=>s.name==='扁平几何');
styleSelect.replaceChildren(...styles.map(style=>{const option=document.createElement('option');option.value=style.name;option.textContent=style.name;option.selected=style.name===selectedStyle.name;return option;}));

function showStyle(style){
  selectedStyle=style;
  const art=document.querySelector('#dialog-art');art.className=`style-art ${style.skin}`;art.innerHTML=artwork(style.kind);
  document.querySelector('#dialog-title').textContent=style.name;
  document.querySelector('#dialog-description').textContent=style.description;
  document.querySelector('#dialog-use').textContent=style.use;
  document.querySelector('#dialog-motion').textContent=style.motion;
  dialog.showModal();
}
function renderStyles(filter='all'){
  grid.replaceChildren(...styles.filter(s=>filter==='all'||s.category===filter).map(style=>{
    const card=document.createElement('button');card.type='button';card.className='style-card';card.setAttribute('aria-label',`查看${style.name}风格详情`);
    const art=document.createElement('div');art.className=`style-art ${style.skin}`;art.innerHTML=artwork(style.kind);
    const label=document.createElement('div');label.className='style-card-label';const title=document.createElement('h3');title.textContent=style.name;const index=document.createElement('span');index.textContent=`${String(styles.indexOf(style)+1).padStart(2,'0')} ↗`;label.append(title,index);
    const desc=document.createElement('p');desc.textContent=style.en;card.append(art,label,desc);card.addEventListener('click',()=>showStyle(style));return card;
  }));
}
renderStyles();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(item=>{const active=item===button;item.classList.toggle('selected',active);item.setAttribute('aria-pressed',String(active));});renderStyles(button.dataset.filter);
}));
document.querySelector('#dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.querySelector('#use-style').addEventListener('click',()=>{styleSelect.value=selectedStyle.name;updateBrief();dialog.close();document.querySelector('#start').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});styleSelect.focus({preventScroll:true});});

const form=document.querySelector('#brief-form');
const promptOutput=document.querySelector('#prompt-output');
const status=document.querySelector('#copy-status');
function updateBrief(){
  const data=new FormData(form);const topic=String(data.get('topic')).trim()||'（请填写主题）';const audience=String(data.get('audience')).trim()||'普通观众';
  promptOutput.value=`$vibe-science-video\n\n请制作一条科普动画：\n主题：${topic}\n受众：${audience}\n时长：约 ${data.get('duration')} 秒；30 fps\n画幅：${data.get('platform')}\n风格：${data.get('style')}\n声音：${data.get('voice')}\n\n先核查核心事实，准备脚本、动态分镜与来源；再制作可编辑的 Remotion 工程，逐段预览并导出 MP4。保持统一视觉，用动作解释因果，示意数据要标明。保留来源与素材授权说明。`;
  status.textContent='需求已更新，可以复制。';
}
form.addEventListener('input',updateBrief);form.addEventListener('change',updateBrief);form.addEventListener('submit',event=>event.preventDefault());updateBrief();status.textContent='先安装 Skill，再复制这段需求。';
async function copyText(value){if(navigator.clipboard?.writeText){try{await navigator.clipboard.writeText(value);return true;}catch{}}const temp=document.createElement('textarea');temp.value=value;temp.style.position='fixed';temp.style.opacity='0';document.body.append(temp);temp.select();const ok=document.execCommand('copy');temp.remove();return ok;}
document.querySelector('#copy-prompt').addEventListener('click',async()=>{const ok=await copyText(promptOutput.value);status.textContent=ok?'已复制，到新的创作对话中粘贴即可。':'复制未成功，请选中上方文字手动复制。';if(!ok){promptOutput.focus();promptOutput.select();}});
document.querySelector('#copy-install').addEventListener('click',async event=>{event.currentTarget.textContent=await copyText('node scripts/install.mjs')?'已复制 ✓':'请手动复制上方命令';});
document.querySelector('#motion-toggle').addEventListener('click',event=>{const stage=document.querySelector('.hero-stage');const paused=stage.classList.toggle('paused');event.currentTarget.setAttribute('aria-pressed',String(paused));event.currentTarget.textContent=paused?'播放动效 ▶':'暂停动效 Ⅱ';const svg=stage.querySelector('svg');if(paused)svg.pauseAnimations?.();else svg.unpauseAnimations?.();});
