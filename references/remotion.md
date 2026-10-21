# Remotion 工程与验证

Remotion 通过代码组织动画，Studio 在浏览器中预览，CLI 或 Studio 导出视频。执行时查阅[官方安装文档](https://www.remotion.dev/docs/)与当前包版本；不要假定旧命令和系统依赖永远不变。

本仓库示例采用 Remotion `4.0.537`，以该版本完成 Windows x64 的中文、预览与 H.264 MP4 验证。它是可复现的基线，不代表执行当日的最新版；其他系统按官方要求准备环境。所有 Remotion 包应保持同版本。

## 生成独立示例

```sh
node scripts/scaffold.mjs --out ./my-video
cd my-video
npm install
npm run check
npm run dev
npm run render
```

生成命令只复制本项目的示例文件，目标目录必须为空。安装依赖、下载浏览器和渲染由后续明确命令执行。

## 新建官方空白工程

```sh
npx create-video@latest --yes --blank my-video
cd my-video
npm run dev
```

先检查现有工程；仅当需要新建时才初始化。不要在正在使用的工程里重新运行脚手架。Node 版本服从所选模板的 `engines` 和官方说明。

## 渲染

```sh
npx remotion browser ensure
npx remotion render src/index.ts ScienceVideo out/video.mp4
```

入口和 Composition ID 要与工程实际一致。需要时降低并发，避免占满正在进行其他工作的电脑。

保留锁文件；字体尽量使用可在渲染环境中稳定加载且许可明确的来源。抽查首尾与关键帧，并核对实际视频的宽高、帧率、总时长和帧数。

官方参考：[帧时间](https://www.remotion.dev/docs/use-current-frame)、[可复现随机数](https://www.remotion.dev/docs/random)、[渲染](https://www.remotion.dev/docs/render)、[Studio](https://www.remotion.dev/docs/studio)。
