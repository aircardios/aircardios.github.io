/**
 * AirCard 中文官网 - 交互脚本 (含亮暗双模切换与科技蓝微动效)
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  init3DWalletCard();
  initKeypadPreview();
  initPlatformTabs();
  initClipboardHandlers();
  initMobileMenu();
  populateDynamicConfig();
});

/**
 * 1. 亮色 / 暗色主题管理系统
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");

  // 更新按钮图标
  function updateThemeIcon(isDark) {
    if (!themeIcon) return;
    if (isDark) {
      themeIcon.innerHTML = `
        <svg class="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      `;
      themeToggleBtn?.setAttribute("title", "切换至浅色模式");
    } else {
      themeIcon.innerHTML = `
        <svg class="w-5 h-5 text-slate-700 dark:text-slate-200 transition-transform duration-300 rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      `;
      themeToggleBtn?.setAttribute("title", "切换至深色模式");
    }
  }

  // 初始化检查状态
  const isCurrentDark = document.documentElement.classList.contains("dark");
  updateThemeIcon(isCurrentDark);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateThemeIcon(isDark);
      showToast(isDark ? "已切换至深色模式" : "已切换至浅色模式");
    });
  }

  // 监听系统偏好改变（未主动锁定时）
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        document.documentElement.classList.add("dark");
        updateThemeIcon(true);
      } else {
        document.documentElement.classList.remove("dark");
        updateThemeIcon(false);
      }
    }
  });
}

/**
 * 2. 3D 钱包卡面鼠标视差与光泽微交互
 */
function init3DWalletCard() {
  const card = document.querySelector(".wallet-card-3d");
  const container = document.querySelector(".wallet-card-container");
  const glare = document.querySelector(".card-glare");
  const skinDots = document.querySelectorAll(".skin-dot");
  const skinLayer = document.querySelector(".card-bg-layer");

  if (!card || !container) return;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 65%)`;
    }
  });

  container.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  });

  // 切换预设皮肤
  skinDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      skinDots.forEach((d) => d.classList.remove("ring-4", "ring-brand-400"));
      dot.classList.add("ring-4", "ring-brand-400");

      const skinClass = dot.getAttribute("data-skin");
      if (skinLayer) {
        skinLayer.className = `card-bg-layer absolute inset-0 transition-opacity duration-300 ${skinClass}`;
      }
    });
  });
}

/**
 * 3. 锁屏 0-9 密码按键试玩
 */
function initKeypadPreview() {
  const keys = document.querySelectorAll(".keypad-btn");
  const audioContext = window.AudioContext || window.webkitAudioContext ? new (window.AudioContext || window.webkitAudioContext)() : null;

  function playKeySound(freq = 600) {
    if (!audioContext) return;
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioContext.currentTime);
    gain.gain.setValueAtTime(0.04, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start();
    osc.stop(audioContext.currentTime + 0.12);
  }

  keys.forEach((key) => {
    key.addEventListener("click", () => {
      key.classList.add("pressed", "bg-brand-500/20", "border-brand-500");
      const num = key.querySelector(".key-num")?.textContent;
      const freq = 500 + (parseInt(num, 10) || 5) * 50;
      playKeySound(freq);

      setTimeout(() => {
        key.classList.remove("pressed", "bg-brand-500/20", "border-brand-500");
      }, 150);
    });
  });
}

/**
 * 4. 三端平台 Tab 切换 (iOS / macOS / Windows)
 */
function initPlatformTabs() {
  const tabs = document.querySelectorAll(".platform-tab-btn");
  const panes = document.querySelectorAll(".platform-tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("bg-brand-600", "text-white", "shadow-sm");
        t.classList.add("text-slate-600", "dark:text-slate-400");
      });
      panes.forEach((p) => p.classList.add("hidden"));

      tab.classList.add("bg-brand-600", "text-white", "shadow-sm");
      tab.classList.remove("text-slate-600", "dark:text-slate-400");

      const targetId = tab.getAttribute("data-tab");
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.remove("hidden");
      }
    });
  });
}

/**
 * 5. 下载交互（模态框已全站下线，统一由 download.html 承载所有下载出口）
 */
function initDownloadModal() {
  // 全站统一直接出口至 download.html
}

/**
 * 6. 剪贴板复制工具
 */
function initClipboardHandlers() {
  const copyBtns = document.querySelectorAll(".btn-copy");

  copyBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute("data-copy-text");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`已复制提取码: ${textToCopy}`);
        const originalText = btn.textContent;
        btn.textContent = "✓ 已复制";
        setTimeout(() => {
          btn.textContent = originalText;
        }, 2000);
      }).catch(() => {
        showToast("复制失败，请手动复制");
      });
    });
  });
}

/**
 * 7. 移动端抽屉菜单
 */
function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobileMenu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

/**
 * 8. 动态读取 config.js 填充所有平台的版本号、真实网盘链接与提取码
 */
function populateDynamicConfig() {
  if (!window.AIR_CONFIG) return;
  const cfg = window.AIR_CONFIG;

  // 1. 遍历平台配置动态更新
  if (cfg.platforms) {
    Object.keys(cfg.platforms).forEach((platformKey) => {
      const platform = cfg.platforms[platformKey];

      // 动态更新版本号显示 (例如: [data-bind-version="ios"])
      const versionEls = document.querySelectorAll(`[data-bind-version="${platformKey}"]`);
      versionEls.forEach((el) => {
        el.textContent = platform.version;
      });

      // 动态更新网盘下载链接与提取码
      if (platform.drives) {
        Object.keys(platform.drives).forEach((driveKey) => {
          const drive = platform.drives[driveKey];

          // 链接元素：[data-platform="ios"][data-drive="xunlei"]
          const driveLinks = document.querySelectorAll(`[data-platform="${platformKey}"][data-drive="${driveKey}"]`);
          driveLinks.forEach((el) => {
            el.href = drive.url;
          });

          // 提取码显示文本：[data-code-display="ios-xunlei"]
          const codeDisplays = document.querySelectorAll(`[data-code-display="${platformKey}-${driveKey}"]`);
          codeDisplays.forEach((el) => {
            el.textContent = drive.code ? drive.code : (drive.codeText || "免提取码");
          });

          // 复制提取码按钮：[data-code-copy="${platformKey}-${driveKey}"]
          const codeCopyBtns = document.querySelectorAll(`[data-code-copy="${platformKey}-${driveKey}"]`);
          codeCopyBtns.forEach((el) => {
            if (drive.code) {
              el.setAttribute("data-copy-text", drive.code);
              el.classList.remove("hidden");
            } else {
              el.classList.add("hidden");
            }
          });
        });
      }
    });
  }

  // 2. 官方 Releases 链接
  if (cfg.officialReleases) {
    const ghIos = document.querySelectorAll(".gh-release-ios");
    ghIos.forEach(el => el.href = cfg.officialReleases.ios);

    const ghMac = document.querySelectorAll(".gh-release-macos");
    ghMac.forEach(el => el.href = cfg.officialReleases.macos);

    const ghWin = document.querySelectorAll(".gh-release-windows");
    ghWin.forEach(el => el.href = cfg.officialReleases.windows);
  }

  // 3. 资源大礼包链接
  if (cfg.resourcePack && cfg.resourcePack.url) {
    const resourceLinks = document.querySelectorAll(".resource-pack-link");
    resourceLinks.forEach(el => el.href = cfg.resourcePack.url);
  }
}

/**
 * 轻量 Toast 提示
 */
function showToast(message) {
  let toast = document.querySelector(".toast-msg");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-msg bg-slate-900/90 text-white dark:bg-slate-100 dark:text-slate-900 border border-slate-700 dark:border-slate-300 backdrop-blur-md";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}
