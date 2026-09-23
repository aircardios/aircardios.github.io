/**
 * AirCard 中文官网 - 配置文件
 * 便于集中维护各端版本号、网盘真实下载链接、提取码及官方仓库地址
 *
 * 💡 维护指南：
 * 后续有新版本发布或网盘链接变更时，只需在此处修改对应平台的 version、url 和 code，
 * 官网所有页面（首页、下载中心、下载弹窗）均会自动动态同步更新！
 */

const AIR_CONFIG = {
  // 基础信息
  appName: "AirCard 🎴",
  siteTitle: "AirCard 🎴 中文官网",
  lastUpdated: "2026-09",
  orgUrl: "https://github.com/aircardios",

  // 官方 Releases 地址
  officialReleases: {
    ios: "https://github.com/mak5er/AirCard-iOS/releases",
    macos: "https://github.com/mak5er/AirCard/releases",
    windows: "https://github.com/Lumid-Off/AirCard-Windows/releases",
  },

  // 各平台最新版本与专属网盘下载配置
  platforms: {
    ios: {
      id: "ios",
      title: "AirCard-iOS",
      tag: "iOS 手机端 (无需电脑)",
      version: "v1.3",
      releaseDate: "2026-09",
      fileName: "AirCard-iOS.ipa",
      size: "~18.5 MB",
      compatibility: "iOS 18 ~ 27+",
      desc: "iPhone 原生运行，借助 LocalDevVPN 本地回环与 AirTraffic 注入，脱离电脑随时改卡面、锁屏按键及 PosterBoard 壁纸，集成 NeoSpring 免重启注销",
      sideloadTools: ["TrollStore (巨魔)", "SideStore", "AltStore", "LiveContainer", "爱思助手签名"],
      officialUrl: "https://github.com/mak5er/AirCard-iOS/releases",
      drives: {
        xunlei: {
          name: "迅雷网盘",
          url: "https://pan.xunlei.com/s/VP21gOu_3y47h8npIkeHIZPMA1?pwd=bdzw#",
          code: "bdzw",
          badge: "官方分流",
          icon: "⚡"
        },
        guangya: {
          name: "光鸭网盘",
          url: "https://www.guangyapan.com/s/1949022754862493787_aeWXEya0Twth-MDh",
          code: "",
          codeText: "免提取码",
          badge: "免登录直链",
          icon: "🦆"
        },
        quark: {
          name: "夸克网盘",
          url: "https://pan.quark.cn/s/b9034a60bff4",
          code: "",
          codeText: "无提取码",
          badge: "全量分流",
          icon: "⚡"
        }
      }
    },
    windows: {
      id: "windows",
      title: "AirCard for Windows",
      tag: "Windows 原生极速版",
      version: "v1.2.2",
      releaseDate: "2026-09",
      fileName: "aircard.exe",
      size: "~7.5 MB",
      compatibility: "Windows 10 / 11 (64位)",
      desc: "Rust 纯原生编写，零依赖单个可执行文件，超轻量 Material Design 3 现代界面",
      sideloadTools: ["需 64位 iTunes / Apple 移动设备支持驱动"],
      officialUrl: "https://github.com/Lumid-Off/AirCard-Windows/releases",
      drives: {
        xunlei: {
          name: "迅雷网盘",
          url: "https://pan.xunlei.com/s/VP1tfDFYNMEUzR6TalRh_D3yA1?pwd=9sns#",
          code: "9sns",
          badge: "高速分流",
          icon: "⚡"
        },
        guangya: {
          name: "光鸭网盘",
          url: "https://www.guangyapan.com/s/1948387958393946153_aeWXEya0Twth-MDh",
          code: "",
          codeText: "免提取码",
          badge: "免登录直链",
          icon: "🦆"
        },
        quark: {
          name: "夸克网盘",
          url: "https://pan.quark.cn/s/fb902664428a",
          code: "",
          codeText: "无提取码",
          badge: "推荐分流",
          icon: "⚡"
        }
      }
    },
    macos: {
      id: "macos",
      title: "AirCard for macOS",
      tag: "macOS 通用版 (Universal)",
      version: "v1.2.4",
      releaseDate: "2026-09",
      fileName: "AirCard.dmg",
      size: "~42.8 MB",
      compatibility: "macOS 12.0+",
      desc: "原生支持 Apple Silicon (M1/M2/M3/M4) 与 Intel x86 芯片，内置环境与图像引擎，开箱即用",
      sideloadTools: ["Universal 2 (M系列/Intel 双架构)"],
      officialUrl: "https://github.com/mak5er/AirCard/releases",
      drives: {
        xunlei: {
          name: "迅雷网盘",
          url: "https://pan.xunlei.com/s/VP2AWwvyRfEqNL5_2IyKypbUA1?pwd=sq4z#",
          code: "sq4z",
          badge: "高速分流",
          icon: "⚡"
        },
        guangya: {
          name: "光鸭网盘",
          url: "https://www.guangyapan.com/s/1949644399859953695_aeWXEya0Twth-MDh",
          code: "",
          codeText: "免提取码",
          badge: "免登录直链",
          icon: "🦆"
        },
        quark: {
          name: "夸克网盘",
          url: "https://pan.quark.cn/s/b04d70d40ef6",
          code: "",
          codeText: "无提取码",
          badge: "推荐分流",
          icon: "⚡"
        }
      }
    }
  },

  // 扩展资源包（已下线批量大礼包）
  resourcePack: {
    title: "AirCard 美化资源",
    desc: "支持在卡面模版库与锁屏按键专区单套免提取码高速下载。",
    url: ""
  },

  // 官方玩家社区与交流群配置
  community: {
    qqGroup: "1126901301",
    groupName: "AirCard & 交互壁纸交流群",
    description: "免越狱玩机、Apple Pay 钱包卡面美化、锁屏按键与壁纸技术交流群",
    joinUrl: "https://qm.qq.com/q/JVAlVfT2ka", // 网页点击一键加群通道
    qrUrl: "https://qm.qq.com/q/qAL5xZTsys"    // 手机扫码专用加群通道
  }
};

window.AIR_CONFIG = AIR_CONFIG;
