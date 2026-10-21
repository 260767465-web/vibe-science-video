# 第三方软件、字体与参考资料

本文件说明依赖与素材边界，不把第三方软件改授为本项目 MIT 许可。记录更新：2026-10-21。完整教程来源及内容处理方式见 [NOTICE.md](NOTICE.md)。

## 软件依赖

下表按自带示例声明的版本及对应已安装包的许可信息核对。仓库和 Skill ZIP 不内置 `node_modules`、第三方软件源码或可执行程序；安装依赖时取得的软件仍适用各自许可。这里列出直接依赖，不是所有传递依赖的完整清单。

| 软件／版本 | 权利人与许可来源 |
| --- | --- |
| `remotion`、`@remotion/cli` 4.0.537 | Remotion；采用 Remotion 自身许可，不是 MIT。查阅[许可条款](https://www.remotion.dev/docs/license)、[使用与商业许可说明](https://www.remotion.dev/docs/license/faq)，以及实际安装包的 `LICENSE.md` |
| `react`、`react-dom` 19.2.3 | Meta Platforms, Inc. and affiliates；[MIT](https://github.com/facebook/react/blob/main/LICENSE) |
| `typescript` 5.9.3 | Microsoft Corporation；[Apache-2.0](https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt) |
| `@types/react` 19.2.7 | DefinitelyTyped contributors；[MIT](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE)，具体署名见安装包 `LICENSE` |
| `@types/web` 0.0.166 | Microsoft Corporation／TypeScript-DOM-Lib-Generator contributors；[Apache-2.0](https://github.com/microsoft/TypeScript-DOM-Lib-Generator/blob/main/LICENSE.txt) |

链接指向项目的许可来源；不同版本如有变化，以实际取得的软件包及适用条款为准。安装 Skill 本身不代表已取得 Remotion 的付费许可，也不意味着所有用户均可无限制免费商用。

未来若分发包含依赖的软件构建、浏览器、渲染工具或字体文件，应另行收集对应版本及传递依赖的版权、许可与 NOTICE；不能只携带本项目 LICENSE。

## 图形、视频、字体与商标

- 公开的 SVG 图形、CSS 动效、6 秒示例视频及其封面由本项目编写代码或渲染生成，使用 AI 辅助；示例无音乐、配音、原教程画面、照片或外部素材视频。
- 页面没有外部字体 CDN、`@font-face` 字体下载或内置字体程序。字体栈中的产品名只是设备字体候选项，不表示获得字体再分发权。
- 当前示例在 Windows 环境中调用系统中文字体进行位图渲染。微软关于图片、视频文字和网页字体栈的说明见[字体使用与再分发 FAQ](https://learn.microsoft.com/en-us/typography/fonts/font-faq)。该说明不替其他字体或特定应用授予许可；改用其他字体时需核实相应条款。
- Git源宝、Remotion、React、OpenAI、GitHub 等名称仅用于来源或兼容性说明；相关名称、商标与第三方标识不因本项目 MIT 许可而转移。网页的自绘 VIBE 标识不表示已完成商标检索或注册。

## 参考而未内置的项目

[Vincentwei1021 / mg-styles-15](https://github.com/Vincentwei1021/mg-styles-15)作为补充学习资料列明，版权署名为 Vincentwei1021，许可为 [MIT](https://github.com/Vincentwei1021/mg-styles-15/blob/main/LICENSE)。本包没有分发该项目的文件；若以后复制其代码、提示词或其他实质内容，应保留其版权与许可文本，并分别核实其中第三方素材的许可。它与 Git源宝附件的来源关系未被核实。
