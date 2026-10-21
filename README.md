# Vibe Science Video

**把一个问题，变成看得懂的动画。**

[浏览介绍页与风格实验室](https://260767465-web.github.io/vibe-science-video/) · [下载 Skill ZIP · v1.0.0](https://github.com/260767465-web/vibe-science-video/releases/download/v1.0.0/vibe-science-video.zip) · [版本说明](https://github.com/260767465-web/vibe-science-video/releases/tag/v1.0.0)

用于代码驱动科普动画的中文 Skill：从主题、事实核查和动态分镜，推进到 Remotion 工程、预览与 MP4 交付。

> 来源声明：本项目在 AI 辅助下，基于 **Git源宝** 相关教程学习整理与方法改编，并编写代码和辅助工具。非原作者官方产品，不宣称教程方法与 15 类风格由本项目首创，不分发原版 PDF 或完整提示词。请先阅读 [来源与使用边界](NOTICE.md)。

## 包含什么

- [可安装的 Skill](SKILL.md)：有范围明确的触发描述和制作流程。
- [15 种风格选型指南](references/styles.md)：解释适合什么内容、需要保留哪些视觉特征；不是 15 个现成工程。
- [动态分镜方法](references/workflow.md)及[重新编写的制作提示词](references/prompts.md)，分别标注方法来源。
- 跨平台 Node 安装脚本、独立 Remotion 示例脚手架和时间轴检查工具。
- [中文介绍页源码](docs/index.html)：交互式风格选择、制作请求生成器和示例预览。

## 安装 Skill

下载仓库或 Skill 压缩包，解压后在目录中运行：

```sh
node scripts/install.mjs
```

默认安装到 `$CODEX_HOME/skills/vibe-science-video`；未设置 `CODEX_HOME` 时使用 `~/.codex/skills/vibe-science-video`。如果目标已存在，脚本会停止，不会覆盖已有技能。

自定义空目录：

```sh
node scripts/install.mjs --target ./my-skills/vibe-science-video
```

随后在新任务中使用：

```text
用 $vibe-science-video，制作一条关于“推荐算法为什么越刷越懂你”的科普动画。
面向普通用户，90秒，竖屏，极简几何风，需要中文配音。
```

也可以只给主题，制作代理会结合上下文采用可调整的起步方案。安装 Skill 不会自动安装 Remotion、调用模型 API 或启动视频生成。

## 运行自带示例

需要符合示例 `package.json` 要求的 Node.js：

```sh
node scripts/scaffold.mjs --out ./my-video
cd my-video
npm install
npm run check
npm run dev
npm run render
```

示例是独立编写的 6 秒制作流程示意，输出 1920×1080、30fps 的 H.264 MP4。它验证中文、路径动画和工程渲染，不是某一期完整科普片。代码基线是 Remotion 4.0.537；使用最新版时统一升级全部 Remotion 包并重新验证。

生成的工程会携带 LICENSE、NOTICE.md 与 THIRD_PARTY_NOTICES.md。Remotion 本身采用[专门的许可条款](https://www.remotion.dev/docs/license)，不受本项目 MIT 许可覆盖；其他依赖及系统字体仍适用各自许可。

## 方法

1. 明确受众和一个核心问题，核查关键事实。
2. 将脚本拆成有初始状态、变化过程和结果的动态分镜。
3. 用具体视觉规则选择风格，让颜色和图形承载含义。
4. 从统一时间轴实现画面、字幕和声音。
5. 预览、修复，再实际渲染并检查编码后的成片。

只把定义分成一页页文字，再加弹出效果，不能替代原理演示。

## 校验与维护

正式 Skill 下载包通过 GitHub Releases 附件分发。可在 [Release API](https://api.github.com/repos/260767465-web/vibe-science-video/releases/tags/v1.0.0) 中查看对应附件的 `download_count`；这是下载次数，不等于独立用户数，也不包含仓库克隆或其他 ZIP 链接的下载。

```sh
node scripts/check-timeline.mjs examples/scene-plan.json
```

检查场景 ID、正整数帧数、时间轴间隙／重叠和总时长。自带示例另有 TypeScript 检查。

Skill 安装和示例渲染已在 Windows 11 x64 验证。Node 脚本使用跨平台 API，其他系统仍需按 [Remotion 官方说明](https://www.remotion.dev/docs/)准备依赖并验证。

## 来源与许可

感谢 **Git源宝** 分享制作经验，也列明学习时辅助对照的 **Vincentwei1021 / mg-styles-15** 项目；未核实两者资料的来源关系。原视频、公众号、飞书资料、补充参考及逐项处理方式见 [NOTICE.md](NOTICE.md)，软件与字体说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

[MIT](LICENSE)仅在维护者有权授予的范围内适用本项目新增内容，不代授原教程、依赖软件、字体或商标权利。图形、视频和封面的来源已逐项记录；未内置原图、原视频、第三方音乐或字体文件。署名、改写和免责声明均不自动代替必要授权；本次检查也不构成无侵权保证。

权利人可通过[仓库 Issue](https://github.com/260767465-web/vibe-science-video/issues/new)提出署名、替换或移除诉求。查阅[网页来源与许可说明](https://260767465-web.github.io/vibe-science-video/rights.html)。
