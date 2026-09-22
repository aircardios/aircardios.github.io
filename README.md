<div align="center">

# AirCard 🎴 中文官方网站与文档中心

<p align="center">
  <strong>免越狱 · iOS 18 ~ 27+ · Apple 钱包卡面、锁屏按键主题与 PosterBoard 壁纸定制神器</strong><br>
  为中文用户打造的高水准官方文档、使用教程与国内高速下载中心
</p>

<p align="center">
  <a href="https://aircardios.github.io/">
    <img src="https://img.shields.io/badge/官网-aircardios.github.io-2563eb?style=for-the-badge&logo=githubpages&logoColor=white" alt="Website" />
  </a>
  <a href="https://aircardios.github.io/download.html">
    <img src="https://img.shields.io/badge/下载-独立下载中心-0ea5e9?style=for-the-badge&logo=icloud&logoColor=white" alt="Download" />
  </a>
  <a href="https://aircardios.github.io/tutorial.html">
    <img src="https://img.shields.io/badge/教程-独立教程中心-8b5cf6?style=for-the-badge&logo=gitbook&logoColor=white" alt="Tutorial" />
  </a>
  <a href="https://aircardios.github.io/cards/index.html">
    <img src="https://img.shields.io/badge/模版-卡面素材库-10b981?style=for-the-badge&logo=applepay&logoColor=white" alt="Cards" />
  </a>
  <a href="https://aircardios.github.io/community.html">
    <img src="https://img.shields.io/badge/社区-官方交流群-2563eb?style=for-the-badge&logo=tencentqq&logoColor=white" alt="Community" />
  </a>
  <img src="https://img.shields.io/badge/免越狱-No%20Jailbreak-10b981?style=for-the-badge&logo=apple&logoColor=white" alt="No Jailbreak" />
  <img src="https://img.shields.io/badge/支持-iOS%2018%20~%2027+-6366f1?style=for-the-badge" alt="iOS Support" />
</p>

<p align="center">
  <a href="https://aircardios.github.io/">🌐 官方网站</a> ·
  <a href="https://aircardios.github.io/download.html">📥 AirCard Download (IPA下载)</a> ·
  <a href="https://aircardios.github.io/tutorial.html">📖 官方图文教程</a> ·
  <a href="https://aircardios.github.io/cards/index.html">🎨 卡面素材库</a> ·
  <a href="https://aircardios.github.io/community.html">💬 官方社区交流群</a> ·
  <a href="#-aircard-download--ipa-极速下载">📦 网盘下载</a> ·
  <a href="#-三端原生客户端">📱 三端客户端</a> ·
  <a href="#-快速上手教程">🔧 教程</a> ·
  <a href="#-致谢与开发者-credits">👏 致谢</a>
</p>

---

</div>

## 📖 项目简介

**AirCard** 是一款突破 iOS 系统限制的革命性个性化美化工具。利用苹果系统原生的 AirTraffic 同步通道漏洞（`airlift`），在**无需越狱**的前提下，支持直接为 **Apple Pay / 钱包卡片** 赋予专属自定义卡面，为 **iOS 18+ / iOS 27+ 锁屏数字密码按键** 应用热门的 `.passthm` 主题，并重磅新增 **PosterBoard 锁屏壁纸档案 (.tendies)** 注入与 **NeoSpring 免重启注销**。

本项目提供最新版 **AirCard IPA**（`AirCard-iOS.ipa` 手机原生端侧载包，版本 **v1.3**）以及 macOS 和 Windows 客户端高速下载（**AirCard Download**）。

> **兼容性说明**：AirCard-iOS 原生端最新利用链与功能全面支持 **iOS 18.0 至 iOS 27+ (iOS 27.0 或更高版本)**。

---

## ⚡ 核心特性 (v1.3 最新版)

- 🎨 **Apple 钱包卡面深度定制 (Wallet Card Skins)**：
  - 支持 Apple Pay、Apple Cash 以及 Suica/交通卡。
  - 直接写入 Passbook 本地缓存（`cardBackgroundCombined@3x.png`、`@2x.png` 以及用于交通卡的 `cardBackgroundCombined.pdf`）。
  - 即时刷新前脸（front-face）与缩略图缓存，打开钱包瞬间即可见全新卡面。
  - 呼出 Apple Pay 刷卡界面时实时捕获卡片 Hash，支持单卡独立修改或一键批量应用。
  - 官方内置 **400+ 套**（招行、工行、中行、建行、交行、APLUS、Wise、Suica 等）标准 `1536×969` 免越狱高清卡面，开源托管于 [apple-pay-card](https://github.com/aircardios/apple-pay-card)。

- 🔢 **锁屏数字密码按键主题 (Passcode Themes)**：
  - 实时拨号盘预览，支持触摸手势平移与缩放取景。
  - 无缝兼容 Cowabunga 与 Nugget 格式的 `.passthm` 主题包，直接写入 `TelephonyUI-10` 锁屏缓存。
  - 支持整张海报跨 10 个数字按键切片分布，或单独圆形按钮贴图。
  - 提供本地化数字副文本选项（支持乌克兰语与俄语西里尔布局等多语言）。

- 🖼️ **PosterBoard 锁屏壁纸定制 (.tendies) [v1.3 重磅新增]**：
  - 直接从系统“文件”App 导入并解压 `.tendies` 锁屏壁纸档案包。
  - 自动识别 PosterBoard 壁纸容器及当前激活的描述符 UUID。
  - 将精美壁纸配置与资源完整注入 PosterBoard 存储系统。
  - **集成 NeoSpring 自动注销**：基于 WebKit GPU 进程崩溃注销技术，刷写完成后自动注销（Respring）刷新主屏，**彻底告别手动重启 iPhone**！

- 📱 **端侧免电脑本机配对 (On-device Pairing)**：
  - 内置 Bonjour 本地服务广播，支持手机通过“设置 ➔ 隐私与安全性 ➔ 开发者模式 ➔ 与 AirCard-iOS 配对”实现本机自回环配对。
  - 自动读取并将配对记录同步至 `aircard_pairing.plist`。
  - 一旦配对完成，完全脱离电脑与外部数据线，随时随地在手机上修改卡面、主题与壁纸。

- ⚡ **全平台纯原生架构**：
  - **iOS**：SwiftUI + Rust 静态库 (`AirliftFFI`)，提供独立 `AirCard-iOS.ipa`。
  - **macOS**：Universal 2 双架构（Apple Silicon M系列 + Intel x86_64 通用），免配置 Python/Homebrew。
  - **Windows**：Rust 纯原生编写，仅约 **7.5 MB** 绿色单文件，秒开无依赖。

- 🔄 **安全可靠 · 随时无损还原**：
  - 利用系统原生 AirTraffic 传输通道，不破坏系统底层分区，不触碰 Secure Enclave 芯片，不影响 Apple Pay 实际支付安全与银行凭证。

---

## 📦 AirCard Download & IPA 极速下载

| 客户端平台 | 文件类型与版本 | 推荐安装 / 运行方式 | 网盘高速分流通道                                                                                                                                                                                                                    |
| :--- | :--- | :--- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **iPhone 原生端 (AirCard IPA)** | `AirCard-iOS.ipa` (**v1.3**) | TrollStore 巨魔 / SideStore / AltStore / 爱思助手 | [迅雷网盘](https://pan.xunlei.com/s/VP21gOu_3y47h8npIkeHIZPMA1?pwd=bdzw#)<br>[光鸭直链](https://www.guangyapan.com/s/1949022754862493787_aeWXEya0Twth-MDh)<br>[夸克网盘](https://pan.quark.cn/s/b9034a60bff4)                                    |
| **Windows 原生版** | `aircard.exe` (**v1.2.2**) | 绿色单文件解压即用 (需 64位 iTunes/AMDS 驱动) | [迅雷网盘](https://pan.xunlei.com/s/VP1tfDFYNMEUzR6TalRh_D3yA1?pwd=9sns#)<br>[光鸭直链](https://www.guangyapan.com/s/1948387958393946153_aeWXEya0Twth-MDh)<br>[夸克网盘](https://pan.quark.cn/s/fb902664428a) |
| **macOS 通用版** | `AirCard.dmg` (**v1.2.3**) | 拖拽至 Applications (M系列/Intel 双架构) | [迅雷网盘](https://pan.xunlei.com/s/VP22p5T3dmHyci7LcWsqedA5A1?pwd=v8b5#)<br>[光鸭直链](https://www.guangyapan.com/s/1949102385200332863_aeWXEya0Twth-MDh)<br>[夸克网盘](https://pan.quark.cn/s/2468279abd40) |

### 🎨 美化扩展大礼包
- **资源名称**：AirCard 美化扩展大礼包 (50+ 套锁屏主题 & 高清卡面模板)
- **包含内容**：精选热门 `.passthm` 锁屏数字按键主题包、Apple Wallet 1536×969 高清 PSD/PNG 卡面模版，以及交通卡 Suica 专属矢量样式。
- **极速下载**：[夸克网盘免费下载](https://pan.quark.cn/s/c8454bb2e4f1)

### 💬 官方玩家交流社区 (QQ群)
- **群名称**：AirCard & 交互壁纸交流群
- **QQ 群号**：`1006363010`
- **加入方式**：
  - 网页一键直链：[点击直接加入群聊 (通道 1)](https://qm.qq.com/q/5u0IuzGdnW)（支持手机直接唤起 QQ）
  - 手机扫码通道：[扫码专享通道 (通道 2)](https://qm.qq.com/q/RthOcegrim) 或访问 [官方社区页面](https://aircardios.github.io/community.html) 扫码加入

> 🔗 更多版本详情、MD5 校验与历史版本请访问：**[AirCard Download & IPA 下载中心](https://aircardios.github.io/download.html)**

---

## 📱 三端原生客户端

### 1. AirCard-iOS (手机原生端无需电脑)
- **文件格式**：`AirCard-iOS.ipa` (~18.5 MB)
- **支持系统**：iOS 18+ / iOS 27+ (iOS 27.0 及更高版本)
- **推荐侧载工具**：TrollStore (巨魔)、SideStore、AltStore、LiveContainer、爱思助手
- **前置准备**：
  1. 开启 **LocalDevVPN**（回环路由 `127.0.0.1` 或 `10.7.0.1`）。
  2. 前往 iPhone“设置 ➔ 隐私与安全性 ➔ 开发者模式 ➔ 与 AirCard-iOS 配对”（手机通过 Bonjour 自广播实现免电脑配对）。

### 2. AirCard for macOS (Universal DMG · 最新版 v1.2.3)
- **文件格式**：`AirCard.dmg` (~42.8 MB)
- **支持系统**：macOS 12.0 或更高
- **硬件兼容**：Apple Silicon (M1/M2/M3/M4) 与 Intel (x86_64) 双架构
- **安装方法**：打开 DMG 将 `AirCard.app` 拖入“应用程序”文件夹即可。

### 3. AirCard for Windows (Rust 原生单文件 · 最新版 v1.2.2)
- **文件格式**：`aircard.exe` (~7.5 MB 免安装绿色版)
- **支持系统**：Windows 10 / 11 (64位)
- **前置要求**：需安装 **64 位 iTunes** 或 **Apple 移动设备支持服务 (AMDS)** 驱动。

---

## 🚀 快速上手教程

> 🔗 更多详细步骤、LocalDevVPN 配置与三端避坑图文指南请访问：**[独立使用教程中心](https://aircardios.github.io/tutorial.html)**

### 💳 1. 如何自定义 Apple 钱包卡面？
1. **连接与识别**：手机打开 AirCard-iOS（或电脑连接 iPhone 并信任）。点击 **Scan Cards**，在手机上双击电源键打开 Apple Pay 轻触卡片即可秒级捕捉卡片 Hash。
2. **选择图片**：点击卡片 Mockup 或拖入自定义图片（程序自动居中缩放裁剪至 1536×969）。
3. **写入生效**：点击 **Flash Skins** / **Apply**。在多任务中彻底划掉钱包 App（或重启手机）即可看到全新卡面！

### 🔢 2. 如何应用锁屏按键主题 (.passthm)？
1. **导入主题**：在客户端内导入任意 Cowabunga 或 Nugget 格式的 `.passthm` 文件。
2. **选择版本**：iOS 18+ / iOS 27+ 默认选择 **TelephonyUI-10**。
3. **写入与注销**：点击 **Apply Passcode Theme**，完成后通过 NeoSpring 注销（或重启 iPhone）即可展现全新按键！

### 🖼️ 3. 如何应用 PosterBoard 锁屏壁纸 (.tendies)？
1. **导入壁纸包**：从“文件”App 导入 `.tendies` 锁屏壁纸归档文件。
2. **识别与注入**：App 自动识别当前激活的 PosterBoard 容器与 UUID 并注入壁纸资产。
3. **NeoSpring 注销**：写入完成后自动调用 NeoSpring 触发系统注销生效，无需整机重启！

---

## 🚨 重要避坑与疑难排障

> [!IMPORTANT]
> **锁屏按键主题生效必须关闭“粗体文本”！**  
> 在 iPhone 上前往 **“设置 ➔ 显示与亮度”**，务必将 **“粗体文本 (Bold Text)” 保持关闭**。若开启粗体文本，iOS 会跳过图形缓存直接渲染系统矢量字体，导致按键主题无法显示。

> [!TIP]
> **Windows 提示设备未连接或 AirTraffic 同步失败？**  
> 1. 下载安装 **3uTools (爱思助手)**。  
> 2. **拔下 iPhone 数据线**。  
> 3. 打开 3uTools，点击 **“工具箱 ➔ 修复驱动”**，点击 **“立即修复”**。  
> 4. 修复完成后重新插入数据线信任电脑，重新打开 `aircard.exe` 即可正常识别。

> [!NOTE]
> **macOS 首次打开提示“无法验证开发者”或“已损坏”？**  
> 在访达中右键点击 `AirCard.app` ➔ 选择“打开”；或者在终端中运行以下命令解除隔离：  
> ```bash
> sudo xattr -cr /Applications/AirCard.app
> ```

---

## 👏 致谢与开发者 (Credits)

- **[@mak5er](https://github.com/mak5er)**：主开发者，负责 UI、锁屏密码主题、Tendies 引擎、端侧免电脑配对。
- **[@merybist](https://github.com/merybist)**：初始版本移植贡献。
- **[AirLift](https://github.com/0xjohnnydev/airlift)** by **[0xjohnny (@0xjohnnydev)](https://github.com/0xjohnnydev)**：底层 `AirliftFFI` 所依赖的 AirTraffic 与 ATAirlock 沙盒逃逸核心研究。
- **[NeoSpring](https://github.com/rooootdev/neospring)**：**[@skadz108](https://github.com/skadz108)** 与 **[@rooootdev](https://github.com/rooootdev)** 的 Swift 实现，以及 **[@neonmodder123](https://github.com/neonmodder123)** 发现的 WebKit GPU 进程崩溃 respring 技术。
- 本项目基于 **AirCard** 核心理念构建。

---


## 📄 免责声明与开源许可

- 本项目及本网站文档仅供学习交流与个人研究使用，所有权利归原作者所有。
- 遵循 **MIT** 开源许可协议。详见 [LICENSE](LICENSE)。
- 官方主页：[https://aircardios.github.io/](https://aircardios.github.io/)
- 下载中心：[https://aircardios.github.io/download.html](https://aircardios.github.io/download.html)
- 教程中心：[https://aircardios.github.io/tutorial.html](https://aircardios.github.io/tutorial.html)
- 卡面素材库：[https://aircardios.github.io/cards/index.html](https://aircardios.github.io/cards/index.html)
- 官方社区：[https://aircardios.github.io/community.html](https://aircardios.github.io/community.html)
