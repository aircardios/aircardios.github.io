<div align="center">

# AirCard 🎴 中文官方网站与文档中心

<p align="center">
  <strong>免越狱 · iOS 18+ / iOS 27 · Apple 钱包卡面与锁屏按键主题定制神器</strong><br>
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
  <img src="https://img.shields.io/badge/免越狱-No%20Jailbreak-10b981?style=for-the-badge&logo=apple&logoColor=white" alt="No Jailbreak" />
  <img src="https://img.shields.io/badge/支持-iOS%2018%20~%2027-6366f1?style=for-the-badge" alt="iOS Support" />
  <img src="https://img.shields.io/badge/开源协议-MIT%20%2F%20GPL-f59e0b?style=for-the-badge" alt="License" />
</p>

<p align="center">
  <a href="https://aircardios.github.io/">🌐 官方网站</a> ·
  <a href="https://aircardios.github.io/download.html">📥 AirCard Download (IPA下载)</a> ·
  <a href="https://aircardios.github.io/tutorial.html">📖 官方图文教程</a> ·
  <a href="https://aircardios.github.io/cards/index.html">🎨 卡面素材库</a> ·
  <a href="#-aircard-download--ipa-极速下载">📦 网盘下载</a> ·
  <a href="#-三端原生客户端">📱 三端客户端</a> ·
  <a href="#-快速上手教程">🔧 教程</a> ·
  <a href="#-重要避坑与疑难排障">🚨 避坑指南</a>
</p>

---

</div>

## 📖 项目简介

**AirCard** 是一款突破 iOS 系统限制的革命性个性化美化工具。利用苹果系统原生的 AirTraffic 同步通道漏洞（`airlift`），在**无需越狱**的前提下，支持直接为 **Apple Pay / 钱包卡片** 赋予专属自定义卡面，并为 **iOS 18+ 锁屏数字密码按键** 应用热门的 `.passthm` 主题。

本项目提供最新版 **AirCard IPA**（`AirCard-iOS.ipa` 手机原生端侧载包）以及 macOS 和 Windows 客户端高速下载（**AirCard Download**）。

---

## ⚡ 核心特性

- 🎨 **Apple 钱包卡面深度定制**：支持 Apple Pay、Apple Cash 以及 Suica/交通卡。官方模版库内置收录 **400+ 套**（招行、工行、中行、建行、交行、APLUS、Wise、Suica 等）标准的 `1536×969` 免越狱高清卡面，素材开源托管于 [apple-pay-card](https://github.com/aircardios/apple-pay-card) 仓库，支持单卡定制或批量一键应用。
- 🔢 **锁屏数字密码按键主题 (.passthm)**：无缝兼容 Cowabunga 与 Nugget 格式的 `.passthm` 主题包，直接写入 `TelephonyUI-10` 锁屏缓存。
- 📱 **iPhone 原生端免电脑运行 (AirCard IPA)**：AirCard-iOS 借助 LocalDevVPN 本地回环与 AirTraffic 协议，**脱离电脑限制**，随时随地在手机上修改。
- 🧩 **海报无缝切片与单键微调**：一张壁纸自动智能切分为 10 个数字按键，支持实时缩放、平移与西里尔/多语言副标题。
- ⚡ **全平台纯原生架构**：
  - **iOS**：SwiftUI + Rust 静态库 (`AirliftFFI`)，提供独立 `AirCard-iOS.ipa`。
  - **macOS**：Universal 2 双架构（Apple Silicon M系列 + Intel x86_64 通用），免配置 Python/Homebrew。
  - **Windows**：Rust 纯原生编写，仅约 **7.5 MB** 绿色单文件，秒开无依赖。
- 🔄 **安全可靠 · 随时无损还原**：不破坏系统底层分区，不影响 Apple Pay 实际支付安全与银行凭证；内置快照还原引擎，随时一键恢复官方原始卡面。

---

## 📦 AirCard Download & IPA 极速下载

| 客户端平台 | 文件类型与版本 | 推荐安装 / 运行方式 | 网盘高速分流 |
| :--- | :--- | :--- | :--- |
| **iPhone 原生端 (AirCard IPA)** | `AirCard-iOS.ipa` (v1.2) | TrollStore 巨魔 / SideStore / AltStore / 爱思助手 | [迅雷网盘(码:6edp)](https://pan.xunlei.com/s/VP1tebTkB5C1-LPaJG2jUgqwA1?pwd=6edp#) · [光鸭直链](https://www.guangyapan.com/s/1948387308566241285_aeWXEya0Twth-MDh) · [夸克网盘](https://pan.quark.cn/s/c8454bb2e4f1) |
| **Windows 原生版** | `aircard.exe` (v1.2.2) | 绿色单文件解压即用 (需 iTunes/AMDS 驱动) | [迅雷网盘(码:9sns)](https://pan.xunlei.com/s/VP1tfDFYNMEUzR6TalRh_D3yA1?pwd=9sns#) · [光鸭直链](https://www.guangyapan.com/s/1948387958393946153_aeWXEya0Twth-MDh) · [夸克网盘](https://pan.quark.cn/s/fb902664428a) |
| **macOS 通用版** | `AirCard.dmg` (v1.2.2) | 拖拽至 Applications (M系列/Intel 双架构) | [迅雷网盘(码:htkt)](https://pan.xunlei.com/s/VP1tfH776mp7OLKRtGUCyuE2A1?pwd=htkt#) · [光鸭直链](https://www.guangyapan.com/s/1948388010319433771_aeWXEya0Twth-MDh) · [夸克网盘](https://pan.quark.cn/s/d60fefe986c5) |

> 🔗 更多版本详情、MD5 校验与历史版本请访问：**[AirCard Download & IPA 下载中心](https://aircardios.github.io/download.html)**

---

## 📱 三端原生客户端

### 1. AirCard-iOS (手机原生端无需电脑)
- **文件格式**：`AirCard-iOS.ipa` (~18.5 MB)
- **支持系统**：iOS 18+ / iOS 27
- **推荐侧载工具**：TrollStore (巨魔)、SideStore、AltStore、LiveContainer、爱思助手
- **前置准备**：
  1. 开启 **LocalDevVPN**（回环路由 `127.0.0.1` 或 `10.7.0.1`）。
  2. 前往 iPhone“设置 ➔ 隐私与安全性 ➔ 开发者模式 ➔ 与 AirCard-iOS 配对”。

### 2. AirCard for macOS (Universal DMG)
- **文件格式**：`AirCard.dmg` (~42.8 MB)
- **支持系统**：macOS 12.0 或更高
- **硬件兼容**：Apple Silicon (M1/M2/M3/M4) 与 Intel (x86_64) 双架构
- **安装方法**：打开 DMG 将 `AirCard.app` 拖入“应用程序”文件夹即可。

### 3. AirCard for Windows (Rust 原生单文件)
- **文件格式**：`aircard.exe` (~7.5 MB 免安装绿色版)
- **支持系统**：Windows 10 / 11 (64位)
- **前置要求**：需安装 **64 位 iTunes** 或 **Apple 移动设备支持服务 (AMDS)** 驱动。

---

## 🚀 快速上手教程

> 🔗 更多详细步骤、LocalDevVPN 配置与三端避坑图文指南请访问：**[独立使用教程中心](https://aircardios.github.io/tutorial.html)**

### 💳 如何自定义 Apple 钱包卡面？
1. **连接与识别**：手机打开 AirCard-iOS，或电脑端连接 iPhone 并在手机上点击“信任”。点击 **Scan Cards**，在手机上双击电源键打开 Apple Pay 轻触卡片即可秒级捕捉卡片 Hash。
2. **选择图片**：点击卡片 Mockup 或拖入自定义图片（程序自动居中缩放裁剪至 1536×969）。
3. **写入生效**：点击 **Flash Skins** / **Apply**。在多任务中彻底划掉钱包 App（或重启手机）即可看到全新卡面！

### 🔢 如何应用锁屏按键主题 (.passthm)？
1. **导入主题**：在客户端内导入任意 Cowabunga 或 Nugget 格式的 `.passthm` 文件。
2. **选择版本**：iOS 18+ 默认选择 **TelephonyUI-10**。
3. **写入与重启**：点击 **Apply Passcode Theme**，完成后**重启 iPhone** 即可展现全新按键！

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


## 📄 免责声明与开源许可

- 本项目及本网站文档仅供学习交流与个人研究使用，所有权利归原作者所有。
- 遵循 **MIT / GPL** 开源许可协议。
- 官网静态展示：[https://aircardios.github.io/](https://aircardios.github.io/)
- 数据中心与构建引擎：[aircardios/aircard-page-data](https://github.com/aircardios/aircard-page-data)

