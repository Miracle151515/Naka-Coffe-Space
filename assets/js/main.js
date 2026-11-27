(() => {
  const header = document.querySelector("[data-header]");
  const menu = document.querySelector("[data-menu]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menuClose = document.querySelector("[data-menu-close]");
  const main = document.getElementById("main");
  const footer = document.querySelector(".site-footer");
  const skipLink = document.querySelector(".skip-link");
  const body = document.body;
  const page = body.dataset.page || "home";
  const mobileQuery = window.matchMedia("(max-width: 960px)");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  let menuOpen = false;
  let lastFocused = null;

  const getMenuFocusable = () => {
    if (!menu) return [];
    return Array.from(
      menu.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])")
    ).filter((element) => element.getClientRects().length > 0);
  };

  const setBackgroundInert = (inert) => {
    [header, main, footer, skipLink].forEach((element) => {
      if (element) element.inert = inert;
    });
  };

  const focusAfterInertChange = (element) => {
    if (!element) return;
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (document.contains(element)) element.focus({ preventScroll: true });
      });
    });
  };

  const setMenu = (open) => {
    if (!menu || !menuToggle || menuOpen === open) return;

    menuOpen = open;
    menuToggle.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    menu.classList.toggle("is-open", open);

    if (open) {
      lastFocused = document.activeElement;
      menu.inert = false;
      body.classList.add("menu-open");
      setBackgroundInert(true);
      focusAfterInertChange(menuClose);
      return;
    }

    menu.inert = true;
    setBackgroundInert(false);
    body.classList.remove("menu-open");

    focusAfterInertChange(
      lastFocused && typeof lastFocused.focus === "function" ? lastFocused : menuToggle
    );
  };

  if (menuToggle) menuToggle.addEventListener("click", () => setMenu(true));
  if (menuClose) menuClose.addEventListener("click", () => setMenu(false));

  if (menu) {
    menu.querySelectorAll("a[href]").forEach((link) => {
      link.addEventListener("click", () => {
        if (menuOpen) setMenu(false);
      });
    });
  }

  document.addEventListener("keydown", (event) => {
    if (!menuOpen || !menu) return;

    if (event.key === "Escape") {
      event.preventDefault();
      setMenu(false);
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = getMenuFocusable();
    if (!focusable.length) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && (active === first || !menu.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });

  const handleBreakpointChange = () => {
    if (!mobileQuery.matches && menuOpen) setMenu(false);
  };

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", handleBreakpointChange);
  } else if (typeof mobileQuery.addListener === "function") {
    mobileQuery.addListener(handleBreakpointChange);
  }

  // Smooth scroll for same-page anchors only
  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = event.target.closest ? event.target.closest('a[href^="#"]') : null;
    if (!link || link.classList.contains("skip-link")) return;

    const id = link.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.getElementById(id.slice(1));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: motionQuery.matches ? "auto" : "smooth", block: "start" });

    if (history.pushState) history.pushState(null, "", id);
    else location.hash = id;
  });

  // Active nav highlighting, scroll progress, hero depth drift, and scroll reveals
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const homeSectionIds = ["top", "our-space", "location", "contact"];
  const homeSections = homeSectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  const heroPhoto = document.querySelector(".hero-photo, .about-photo");
  const heroPhotoImg = heroPhoto
    ? heroPhoto.querySelector(".hero-photo__img, .about-photo__img")
    : null;

  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
  const pendingRevealSet = new Set();
  let revealObserver = null;

  const finishFrameReveal = (item) => {
    let settled = false;
    const cleanup = () => {
      if (settled) return;
      settled = true;
      item.classList.remove("is-revealing");
      item.removeEventListener("transitionend", onTransitionEnd);
    };
    const onTransitionEnd = (event) => {
      if (event.target === item && event.propertyName === "clip-path") {
        cleanup();
      }
    };
    item.addEventListener("transitionend", onTransitionEnd);
    window.setTimeout(cleanup, 1200);
  };

  const revealElement = (item) => {
    if (!item || !item.classList.contains("is-pending")) return;
    pendingRevealSet.delete(item);
    if (revealObserver) revealObserver.unobserve(item);

    if (item.dataset.reveal === "frame") {
      item.classList.add("is-revealing");
      item.classList.remove("is-pending");
      finishFrameReveal(item);
      return;
    }

    item.classList.remove("is-pending");
  };

  const revealNow = (item) => {
    if (!item || !item.classList.contains("is-pending")) return;
    pendingRevealSet.delete(item);
    if (revealObserver) revealObserver.unobserve(item);
    item.classList.add("is-instant");
    item.classList.remove("is-pending", "is-revealing");
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => item.classList.remove("is-instant"));
    });
  };

  const revealAround = (node) => {
    if (!node || !node.closest) return;
    revealNow(node.closest("[data-reveal]"));
    Array.from(pendingRevealSet).forEach((item) => {
      const rect = item.getBoundingClientRect();
      if ((rect.width > 0 || rect.height > 0) && rect.top < window.innerHeight && rect.bottom > 0) {
        revealNow(item);
      }
    });
  };

  if (!motionQuery.matches && "IntersectionObserver" in window && revealItems.length) {
    const initialThreshold = window.innerHeight * 0.94;
    revealItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if ((rect.width > 0 || rect.height > 0) && rect.top > initialThreshold) {
        item.classList.add("is-pending");
        pendingRevealSet.add(item);
      }
    });

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealElement(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );

    pendingRevealSet.forEach((item) => revealObserver.observe(item));

    document.addEventListener("focusin", (event) => revealAround(event.target), true);
    window.addEventListener("hashchange", () => {
      revealAround(document.getElementById(location.hash.slice(1)));
    });
  }

  const resetHeroParallax = () => {
    if (!heroPhotoImg) return;
    heroPhotoImg.style.setProperty("--hero-parallax", "0px");
    heroPhotoImg.style.setProperty("--hero-scale", "1");
  };

  const handleMotionChange = () => {
    if (!motionQuery.matches) return;
    resetHeroParallax();
    Array.from(pendingRevealSet).forEach((item) => revealNow(item));
  };

  if (typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", handleMotionChange);
  } else if (typeof motionQuery.addListener === "function") {
    motionQuery.addListener(handleMotionChange);
  }

  const updateScrollEffects = () => {
    // Batch all DOM layout reads before writes to avoid layout thrashing
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const headerHeight = header ? header.offsetHeight : 0;

    let currentSectionId = null;
    if (page === "home" && homeSections.length) {
      const marker = headerHeight + viewportHeight * 0.28;
      currentSectionId = homeSections[0].id;
      homeSections.forEach((section) => {
        if (section.getBoundingClientRect().top <= marker) {
          currentSectionId = section.id;
        }
      });
      if (viewportHeight + scrollY >= scrollHeight - 4) {
        currentSectionId = "contact";
      }
    }

    let heroRect = null;
    if (heroPhoto && heroPhotoImg && !motionQuery.matches) {
      heroRect = heroPhoto.getBoundingClientRect();
    }

    const sweepItems = [];
    if (pendingRevealSet.size) {
      const sweepThreshold = viewportHeight * 0.92;
      pendingRevealSet.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if ((rect.width > 0 || rect.height > 0) && rect.top < sweepThreshold) {
          sweepItems.push(item);
        }
      });
    }

    // Apply all DOM writes
    if (header) {
      header.classList.toggle("is-stuck", scrollY > 20);
      const scrollable = scrollHeight - viewportHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, scrollY / scrollable)) : 0;
      header.style.setProperty("--scroll-progress", progress.toFixed(4));
    }

    if (currentSectionId) {
      navLinks.forEach((link) => {
        if (link.dataset.nav === currentSectionId) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    if (heroRect && heroRect.bottom > 0 && heroRect.top < viewportHeight) {
      const scrolledPast = Math.max(0, headerHeight - heroRect.top);
      const progress = heroRect.height > 0 ? Math.min(1, scrolledPast / heroRect.height) : 0;
      const offset = progress * 56;
      const scale = 1 + progress * 0.04;
      heroPhotoImg.style.setProperty("--hero-parallax", `${offset.toFixed(2)}px`);
      heroPhotoImg.style.setProperty("--hero-scale", scale.toFixed(4));
    }

    if (sweepItems.length) {
      sweepItems.forEach((item) => revealElement(item));
    }
  };

  let scrollFrame = null;
  const handleScroll = () => {
    if (scrollFrame !== null) return;
    scrollFrame = window.requestAnimationFrame(() => {
      updateScrollEffects();
      scrollFrame = null;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll, { passive: true });
  document.addEventListener("naka:langchange", updateScrollEffects);
  updateScrollEffects();

  // Our Space interactive zone filter
  const filterButtons = Array.from(document.querySelectorAll("[data-space-filter]"));
  const spaceShots = Array.from(document.querySelectorAll("[data-space-grid] .space-shot"));

  if (filterButtons.length && spaceShots.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.spaceFilter;

        filterButtons.forEach((btn) => {
          const active = btn === button;
          btn.classList.toggle("is-active", active);
          btn.setAttribute("aria-pressed", String(active));
        });

        spaceShots.forEach((shot) => {
          const match = filter === "all" || shot.dataset.category === filter;
          shot.classList.toggle("is-hidden", !match);
          if (match) revealNow(shot);
        });

        updateScrollEffects();
      });
    });
  }

  // Our Space photo lightbox
  const lightbox = document.getElementById("lightbox-dialog");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxMeta = document.getElementById("lightbox-meta");
  const lightboxClose = lightbox ? lightbox.querySelector("[data-lightbox-close]") : null;
  const lightboxPrev = lightbox ? lightbox.querySelector("[data-lightbox-prev]") : null;
  const lightboxNext = lightbox ? lightbox.querySelector("[data-lightbox-next]") : null;

  const getVisibleTriggers = () =>
    Array.from(document.querySelectorAll(".space-shot:not(.is-hidden) [data-lightbox-src]"));

  let currentLightboxIndex = 0;
  let lightboxTrigger = null;

  const renderLightbox = (index) => {
    const triggers = getVisibleTriggers();
    if (!triggers.length || !lightboxImg || !lightboxTitle || !lightboxMeta) return;
    currentLightboxIndex = (index + triggers.length) % triggers.length;
    const item = triggers[currentLightboxIndex];
    lightboxImg.src = item.dataset.lightboxSrc || "";
    lightboxImg.alt = item.dataset.lightboxAlt || "";
    lightboxTitle.textContent = item.dataset.lightboxTitle || "";
    const zone = item.dataset.lightboxZone || "";
    lightboxMeta.textContent = zone ? `${zone} · ${currentLightboxIndex + 1} / ${triggers.length}` : `${currentLightboxIndex + 1} / ${triggers.length}`;
  };

  if (lightbox && lightboxClose) {
    document.querySelectorAll("[data-lightbox-src]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const triggers = getVisibleTriggers();
        const index = triggers.indexOf(trigger);
        if (index === -1) return;
        lightboxTrigger = trigger;
        renderLightbox(index);
        if (typeof lightbox.showModal === "function") {
          if (!lightbox.open) lightbox.showModal();
        } else {
          lightbox.setAttribute("open", "");
        }
        lightboxClose.focus();
      });
    });

    lightboxClose.addEventListener("click", () => lightbox.close());
    if (lightboxPrev) lightboxPrev.addEventListener("click", () => renderLightbox(currentLightboxIndex - 1));
    if (lightboxNext) lightboxNext.addEventListener("click", () => renderLightbox(currentLightboxIndex + 1));

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) lightbox.close();
    });

    lightbox.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") renderLightbox(currentLightboxIndex - 1);
      if (event.key === "ArrowRight") renderLightbox(currentLightboxIndex + 1);
    });

    lightbox.addEventListener("close", () => {
      if (lightboxTrigger && typeof lightboxTrigger.focus === "function") {
        lightboxTrigger.focus();
      }
    });

    document.addEventListener("naka:langchange", () => {
      if (lightbox.open) renderLightbox(currentLightboxIndex);
    });
  }

  // Menu page Part 1: Split Studio Showcase tabs
  const menuTablist = document.querySelector("[data-menu-tablist]");
  const menuTabs = Array.from(document.querySelectorAll("[data-menu-tab]"));
  const menuPanels = Array.from(document.querySelectorAll("[data-menu-panel]"));

  if (menuTabs.length && menuPanels.length) {
    const validCategories = new Set(menuTabs.map((tab) => tab.dataset.menuTab));
    const defaultCategory = "coffee";

    const parseCategory = (raw) => {
      if (!raw) return null;
      const cleaned = raw.trim().toLowerCase().replace(/^#/, "").replace(/^(cat-|panel-|tab-)/, "");
      return validCategories.has(cleaned) ? cleaned : null;
    };

    const activateMenuTab = (
      rawCategory,
      { updateUrl = true, focusTab = false, animate = true } = {}
    ) => {
      const category = parseCategory(rawCategory) || defaultCategory;
      let activeTab = null;

      menuTabs.forEach((tab) => {
        const isActive = tab.dataset.menuTab === category;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
        if (isActive) activeTab = tab;
      });

      menuPanels.forEach((panel) => {
        const match = panel.dataset.menuPanel === category;
        panel.hidden = !match;
        panel.classList.remove("is-entering");

        if (match && animate && !motionQuery.matches) {
          void panel.offsetWidth;
          panel.classList.add("is-entering");
        }
      });

      if (focusTab && activeTab && typeof activeTab.focus === "function") {
        activeTab.focus();
      }

      if (updateUrl && history.replaceState) {
        const url = new URL(window.location.href);
        url.searchParams.set("category", category);
        if (parseCategory(url.hash)) {
          url.hash = "";
        }
        history.replaceState(null, "", url.pathname + url.search + url.hash);
      }

      updateScrollEffects();
    };

    menuTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        activateMenuTab(tab.dataset.menuTab, { updateUrl: true, focusTab: false, animate: true });
      });
    });

    if (menuTablist) {
      menuTablist.addEventListener("keydown", (event) => {
        const currentIndex = menuTabs.indexOf(document.activeElement);
        if (currentIndex === -1) return;

        let nextIndex = -1;
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          nextIndex = (currentIndex + 1) % menuTabs.length;
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          nextIndex = (currentIndex - 1 + menuTabs.length) % menuTabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = menuTabs.length - 1;
        }

        if (nextIndex === -1) return;
        event.preventDefault();
        activateMenuTab(menuTabs[nextIndex].dataset.menuTab, {
          updateUrl: true,
          focusTab: true,
          animate: true
        });
      });
    }

    const params = new URLSearchParams(window.location.search);
    const paramCategory = parseCategory(params.get("category"));
    const hashCategory = parseCategory(window.location.hash);
    const initialCategory = paramCategory || hashCategory || defaultCategory;

    activateMenuTab(initialCategory, { updateUrl: false, focusTab: false, animate: false });

    window.addEventListener("hashchange", () => {
      const next = parseCategory(window.location.hash);
      if (next) {
        activateMenuTab(next, { updateUrl: true, focusTab: false, animate: true });
      }
    });
  }

  // Honest placeholder dialog for pending official links
  const dialog = document.getElementById("placeholder-dialog");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogBody = document.getElementById("dialog-body");
  const dialogClose = dialog ? dialog.querySelector("[data-dialog-close]") : null;
  let dialogTrigger = null;
  let currentPlaceholderKey = null;

  const dialogMessages = {
    instagram: {
      title: "Instagram link pending",
      body: "NAKA's official Instagram profile URL has not been supplied yet. This button will link directly to Instagram once confirmed."
    },
    tiktok: {
      title: "TikTok link pending",
      body: "NAKA's official TikTok profile URL has not been supplied yet. This button will link directly to TikTok once confirmed."
    }
  };

  const getPlaceholderMessage = (key) => {
    const fallback = dialogMessages[key];
    if (!fallback) return null;

    const i18n = window.NAKA_I18N;
    if (i18n && typeof i18n.t === "function") {
      const titleKey = `dialog.${key}.title`;
      const bodyKey = `dialog.${key}.body`;
      const title = i18n.t(titleKey);
      const body = i18n.t(bodyKey);
      return {
        title: title && title !== titleKey ? title : fallback.title,
        body: body && body !== bodyKey ? body : fallback.body
      };
    }

    return fallback;
  };

  const renderPlaceholderDialog = (key) => {
    const message = getPlaceholderMessage(key);
    if (!message || !dialogTitle || !dialogBody) return false;

    dialogTitle.textContent = message.title;
    dialogBody.textContent = message.body;
    return true;
  };

  if (dialog && dialogTitle && dialogBody && dialogClose) {
    document.querySelectorAll("[data-placeholder]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const key = trigger.dataset.placeholder;
        if (!renderPlaceholderDialog(key)) return;

        currentPlaceholderKey = key;
        dialogTrigger = trigger;

        if (typeof dialog.showModal === "function") {
          if (!dialog.open) dialog.showModal();
        } else {
          dialog.setAttribute("open", "");
        }

        dialogClose.focus();
      });
    });

    dialogClose.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      currentPlaceholderKey = null;
      if (dialogTrigger && typeof dialogTrigger.focus === "function") {
        dialogTrigger.focus();
      }
    });

    document.addEventListener("naka:langchange", () => {
      if (dialog.open && currentPlaceholderKey) {
        renderPlaceholderDialog(currentPlaceholderKey);
      }
    });
  }
})();
