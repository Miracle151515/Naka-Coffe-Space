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

  // Menu page Part 2: Direct-Manipulation Heyzine-Style Editorial Menu Book
  const bookSection = document.querySelector("[data-menubook]");
  if (bookSection) {
    const pagesSource = bookSection.querySelector("[data-book-pages]");
    const bookStage = bookSection.querySelector("[data-book-stage]");
    const bookShell = bookSection.querySelector("[data-book-shell]");
    const leftSlot = bookSection.querySelector("[data-book-left]");
    const rightSlot = bookSection.querySelector("[data-book-right]");
    const leftBody = bookSection.querySelector("[data-book-left-body]");
    const rightBody = bookSection.querySelector("[data-book-right-body]");
    const leafLayer = bookSection.querySelector("[data-book-leaf-layer]");
    const rangeInput = bookSection.querySelector("[data-book-range]");
    const statusEl = bookSection.querySelector("[data-book-status]");
    const chapterBtns = Array.from(bookSection.querySelectorAll("[data-book-jump]"));
    const sourcePages = pagesSource
      ? Array.from(pagesSource.querySelectorAll("[data-book-page]"))
      : [];

    if (
      sourcePages.length &&
      bookStage &&
      bookShell &&
      leftSlot &&
      rightSlot &&
      leftBody &&
      rightBody &&
      leafLayer
    ) {
      pagesSource.hidden = true;
      const singlePageQuery = window.matchMedia("(max-width: 900px)");
      const totalPages = sourcePages.length;

      // Exact Heyzine 10-page pairing for desktop:
      // State 0: [null, 0] (Page 1 Cover)
      // State 1: [1, 2]    (Pages 2-3)
      // State 2: [3, 4]    (Pages 4-5)
      // State 3: [5, 6]    (Pages 6-7)
      // State 4: [7, 8]    (Pages 8-9)
      // State 5: [9, null] (Page 10 Back)
      const desktopStates = [
        { left: null, right: 0, mode: "is-cover", shift: -25, depthLeft: 0, depthRight: 10, pageNum: 1 },
        { left: 1, right: 2, mode: "is-open", shift: 0, depthLeft: 2, depthRight: 8, pageNum: 2 },
        { left: 3, right: 4, mode: "is-open", shift: 0, depthLeft: 4, depthRight: 6, pageNum: 4 },
        { left: 5, right: 6, mode: "is-open", shift: 0, depthLeft: 6, depthRight: 4, pageNum: 6 },
        { left: 7, right: 8, mode: "is-open", shift: 0, depthLeft: 8, depthRight: 2, pageNum: 8 },
        { left: 9, right: null, mode: "is-back", shift: 25, depthLeft: 10, depthRight: 0, pageNum: 10 }
      ];

      let currentPageNum = 1;
      let currentState = 0;
      let finishTimer = null;
      let pendingCommit = null;
      let dragState = null;

      const formatNum = (n) => String(n).padStart(2, "0");
      const clamp01 = (v) => Math.max(0, Math.min(1, v));

      const pageNumToDesktopState = (pageNum) => {
        const clamped = Math.max(1, Math.min(totalPages, pageNum));
        if (clamped === 1) return 0;
        if (clamped >= totalPages) return desktopStates.length - 1;
        return Math.floor(clamped / 2);
      };

      const parsePageHash = (hash) => {
        if (!hash) return null;
        const match = hash.trim().match(/^#page\/(\d+)$/i);
        if (!match) return null;
        const num = Number(match[1]);
        if (Number.isNaN(num) || num < 1 || num > totalPages) return null;
        return num;
      };

      const syncPageHash = (pageNum) => {
        if (!history.replaceState) return;
        const url = new URL(window.location.href);
        history.replaceState(null, "", `${url.pathname}${url.search}#page/${pageNum}`);
      };

      const clonePage = (index) => {
        if (index === null || index === undefined) return null;
        const src = sourcePages[index];
        if (!src) return null;
        const clone = src.cloneNode(true);
        clone.querySelectorAll("img[loading='lazy']").forEach((img) => {
          img.removeAttribute("loading");
        });
        return clone;
      };

      const setSlotContent = (slot, body, pageIndex) => {
        body.innerHTML = "";
        if (pageIndex === null || pageIndex === undefined) {
          slot.classList.add("is-empty");
          return;
        }
        slot.classList.remove("is-empty");
        const node = clonePage(pageIndex);
        if (node) body.appendChild(node);
      };

      const applyShellMode = (stateIndex) => {
        const cfg = desktopStates[stateIndex] || desktopStates[0];
        bookShell.style.transform = "";
        bookShell.classList.remove("is-cover", "is-open", "is-back", "is-dragging", "is-settling");
        bookShell.classList.add(cfg.mode);
        bookShell.style.setProperty("--depth-left", `${cfg.depthLeft}px`);
        bookShell.style.setProperty("--depth-right", `${cfg.depthRight}px`);
      };

      const updateBookControls = (pageNum, stateIndex) => {
        const isSingle = singlePageQuery.matches;
        const cfg = desktopStates[stateIndex] || desktopStates[0];
        const atStart = isSingle ? pageNum <= 1 : stateIndex <= 0;
        const atEnd = isSingle ? pageNum >= totalPages : stateIndex >= desktopStates.length - 1;

        if (statusEl) {
          if (isSingle || cfg.left === null || cfg.right === null) {
            const singleDisplay = isSingle ? pageNum : cfg.pageNum;
            statusEl.textContent = `Page ${formatNum(singleDisplay)} / ${formatNum(totalPages)}`;
          } else {
            statusEl.textContent = `Pages ${formatNum(cfg.left + 1)} - ${formatNum(cfg.right + 1)} / ${formatNum(totalPages)}`;
          }
        }

        const sliderPage = isSingle ? pageNum : cfg.pageNum;
        if (rangeInput) {
          rangeInput.value = String(sliderPage);
          const pct = ((sliderPage - 1) / (totalPages - 1)) * 100;
          rangeInput.style.setProperty("--range-pct", `${pct}%`);
        }

        const activeChapterPage = desktopStates[stateIndex].pageNum;
        chapterBtns.forEach((btn) => {
          const jumpPage = Number(btn.dataset.bookJump);
          const isActive = jumpPage === activeChapterPage;
          btn.classList.toggle("is-active", isActive);
          btn.setAttribute("aria-pressed", String(isActive));
        });

        if (isSingle) {
          leftSlot.classList.toggle("is-clickable", !atStart || !atEnd);
          rightSlot.classList.remove("is-clickable");
        } else {
          leftSlot.classList.toggle("is-clickable", cfg.left !== null && !atStart);
          rightSlot.classList.toggle("is-clickable", cfg.right !== null && !atEnd);
        }
      };

      const finishTurn = () => {
        if (finishTimer !== null) {
          window.clearTimeout(finishTimer);
          finishTimer = null;
        }
        if (typeof pendingCommit === "function") {
          const commit = pendingCommit;
          pendingCommit = null;
          commit();
        }
      };

      const clearFlipAnimation = () => {
        finishTurn();
        leafLayer.innerHTML = "";
        bookStage.classList.remove("is-dragging");
        bookShell.classList.remove("is-dragging", "is-settling");
        bookShell.style.transform = "";
      };

      const renderImmediate = (pageNum) => {
        clearFlipAnimation();
        const isSingle = singlePageQuery.matches;
        const clamped = Math.max(1, Math.min(totalPages, pageNum));
        currentPageNum = clamped;
        currentState = pageNumToDesktopState(clamped);

        if (isSingle) {
          bookShell.classList.remove("is-cover", "is-back");
          bookShell.classList.add("is-open");
          bookShell.style.transform = "";
          setSlotContent(leftSlot, leftBody, currentPageNum - 1);
          setSlotContent(rightSlot, rightBody, null);
        } else {
          const cfg = desktopStates[currentState];
          currentPageNum = cfg.pageNum;
          applyShellMode(currentState);
          setSlotContent(leftSlot, leftBody, cfg.left);
          setSlotContent(rightSlot, rightBody, cfg.right);
        }

        updateBookControls(currentPageNum, currentState);
      };

      const createLeafFace = (pageIndex, faceClasses) => {
        const face = document.createElement("div");
        face.className = `book-flip-leaf__face ${faceClasses}`;
        const pageNode = clonePage(pageIndex);
        if (pageNode) face.appendChild(pageNode);
        const shade = document.createElement("div");
        shade.className = "book-flip-leaf__shade";
        face.appendChild(shade);
        return { face, shade };
      };

      const navigateToPage = (rawPageNum, { updateHash = true } = {}) => {
        clearFlipAnimation();
        const isSingle = singlePageQuery.matches;
        const targetPageNum = Math.max(1, Math.min(totalPages, rawPageNum));

        if (isSingle) {
          if (targetPageNum === currentPageNum) return;
          const fromIdx = currentPageNum - 1;
          const toIdx = targetPageNum - 1;
          const direction = targetPageNum > currentPageNum ? "next" : "prev";
          currentPageNum = targetPageNum;
          currentState = pageNumToDesktopState(targetPageNum);
          updateBookControls(currentPageNum, currentState);
          if (updateHash) syncPageHash(currentPageNum);

          if (motionQuery.matches) {
            setSlotContent(leftSlot, leftBody, toIdx);
            return;
          }

          const leaf = document.createElement("div");
          leaf.className = `book-flip-leaf book-flip-leaf--mobile-${direction}`;

          if (direction === "next") {
            setSlotContent(leftSlot, leftBody, toIdx);
            leaf.appendChild(createLeafFace(fromIdx, "book-flip-leaf__face--front").face);
            pendingCommit = () => {
              leafLayer.innerHTML = "";
            };
          } else {
            leaf.appendChild(createLeafFace(toIdx, "book-flip-leaf__face--front").face);
            pendingCommit = () => {
              setSlotContent(leftSlot, leftBody, toIdx);
              leafLayer.innerHTML = "";
            };
          }

          leafLayer.appendChild(leaf);
          leaf.addEventListener("animationend", finishTurn, { once: true });
          finishTimer = window.setTimeout(finishTurn, 540);
          return;
        }

        // Desktop 6-state Heyzine book turn
        const targetState = pageNumToDesktopState(targetPageNum);
        if (targetState === currentState) return;

        const fromCfg = desktopStates[currentState];
        const toCfg = desktopStates[targetState];
        const direction = targetState > currentState ? "next" : "prev";

        currentState = targetState;
        currentPageNum = toCfg.pageNum;
        updateBookControls(currentPageNum, currentState);
        if (updateHash) syncPageHash(currentPageNum);

        if (motionQuery.matches) {
          applyShellMode(targetState);
          setSlotContent(leftSlot, leftBody, toCfg.left);
          setSlotContent(rightSlot, rightBody, toCfg.right);
          return;
        }

        applyShellMode(targetState);

        const leaf = document.createElement("div");
        leaf.className = `book-flip-leaf book-flip-leaf--${direction}`;

        if (direction === "next") {
          setSlotContent(rightSlot, rightBody, toCfg.right);
          leaf.appendChild(
            createLeafFace(fromCfg.right, "book-flip-leaf__face--front book-flip-leaf__face--right").face
          );
          leaf.appendChild(
            createLeafFace(toCfg.left, "book-flip-leaf__face--back book-flip-leaf__face--left").face
          );
          pendingCommit = () => {
            setSlotContent(leftSlot, leftBody, toCfg.left);
            leafLayer.innerHTML = "";
          };
        } else {
          setSlotContent(leftSlot, leftBody, toCfg.left);
          leaf.appendChild(
            createLeafFace(fromCfg.left, "book-flip-leaf__face--front book-flip-leaf__face--left").face
          );
          leaf.appendChild(
            createLeafFace(toCfg.right, "book-flip-leaf__face--back book-flip-leaf__face--right").face
          );
          pendingCommit = () => {
            setSlotContent(rightSlot, rightBody, toCfg.right);
            leafLayer.innerHTML = "";
          };
        }

        leafLayer.appendChild(leaf);
        leaf.addEventListener("animationend", finishTurn, { once: true });
        finishTimer = window.setTimeout(finishTurn, 720);
      };

      const stepBook = (delta) => {
        if (singlePageQuery.matches) {
          navigateToPage(currentPageNum + delta, { updateHash: true });
          return;
        }
        const nextState = Math.max(0, Math.min(desktopStates.length - 1, currentState + delta));
        navigateToPage(desktopStates[nextState].pageNum, { updateHash: true });
      };

      // Real-time pointer & touch drag-to-flip interaction
      const isInteractiveTarget = (target) =>
        Boolean(target && target.closest && target.closest("a, button, input, label, select, textarea"));

      const mountInteractiveLeaf = (state) => {
        const { isSingle, direction } = state;
        const leaf = document.createElement("div");

        if (isSingle) {
          leaf.className = `book-flip-leaf book-flip-leaf--mobile-${direction} is-interactive`;
          if (direction === "next") {
            setSlotContent(leftSlot, leftBody, state.targetPageNum - 1);
            const front = createLeafFace(state.fromPageNum - 1, "book-flip-leaf__face--front");
            leaf.appendChild(front.face);
            state.frontShade = front.shade;
          } else {
            const front = createLeafFace(state.targetPageNum - 1, "book-flip-leaf__face--front");
            leaf.appendChild(front.face);
            state.frontShade = front.shade;
          }
          leafLayer.appendChild(leaf);
          state.leaf = leaf;
          return;
        }

        const fromCfg = desktopStates[state.fromState];
        const toCfg = desktopStates[state.targetState];
        leaf.className = `book-flip-leaf book-flip-leaf--${direction} is-interactive`;
        bookShell.classList.add("is-dragging");

        if (direction === "next") {
          setSlotContent(rightSlot, rightBody, toCfg.right);
          const front = createLeafFace(
            fromCfg.right,
            "book-flip-leaf__face--front book-flip-leaf__face--right"
          );
          const back = createLeafFace(
            toCfg.left,
            "book-flip-leaf__face--back book-flip-leaf__face--left"
          );
          leaf.appendChild(front.face);
          leaf.appendChild(back.face);
          state.frontShade = front.shade;
          state.backShade = back.shade;
        } else {
          setSlotContent(leftSlot, leftBody, toCfg.left);
          const front = createLeafFace(
            fromCfg.left,
            "book-flip-leaf__face--front book-flip-leaf__face--left"
          );
          const back = createLeafFace(
            toCfg.right,
            "book-flip-leaf__face--back book-flip-leaf__face--right"
          );
          leaf.appendChild(front.face);
          leaf.appendChild(back.face);
          state.frontShade = front.shade;
          state.backShade = back.shade;
        }

        leafLayer.appendChild(leaf);
        state.leaf = leaf;
      };

      const applyInteractiveProgress = (state, progress) => {
        const p = clamp01(progress);
        state.progress = p;
        const shadeLevel = Math.sin(p * Math.PI) * 0.88;

        if (state.frontShade) state.frontShade.style.opacity = shadeLevel.toFixed(3);
        if (state.backShade) state.backShade.style.opacity = shadeLevel.toFixed(3);

        if (state.isSingle) {
          if (state.direction === "next") {
            state.leaf.style.transform = `rotateY(${(-110 * p).toFixed(2)}deg)`;
            state.leaf.style.opacity = p > 0.78 ? String(Math.max(0, 1 - (p - 0.78) / 0.22)) : "1";
          } else {
            state.leaf.style.transform = `rotateY(${(-110 * (1 - p)).toFixed(2)}deg)`;
            state.leaf.style.opacity = String(Math.min(1, 0.2 + p * 0.9));
          }
          return;
        }

        const fromCfg = desktopStates[state.fromState];
        const toCfg = desktopStates[state.targetState];
        const shiftPct = fromCfg.shift + (toCfg.shift - fromCfg.shift) * p;
        const depthLeft = fromCfg.depthLeft + (toCfg.depthLeft - fromCfg.depthLeft) * p;
        const depthRight = fromCfg.depthRight + (toCfg.depthRight - fromCfg.depthRight) * p;

        bookShell.style.transform = `translateX(${shiftPct.toFixed(2)}%)`;
        bookShell.style.setProperty("--depth-left", `${depthLeft.toFixed(1)}px`);
        bookShell.style.setProperty("--depth-right", `${depthRight.toFixed(1)}px`);

        const angle = state.direction === "next" ? -180 * p : 180 * p;
        state.leaf.style.transform = `rotateY(${angle.toFixed(2)}deg)`;
      };

      const settleInteractiveDrag = (state, commitTurn) => {
        bookStage.classList.remove("is-dragging");
        bookShell.classList.remove("is-dragging");
        bookShell.classList.add("is-settling");

        if (!state.leaf) return;

        state.leaf.classList.add("is-settling");
        const finalP = commitTurn ? 1 : 0;

        if (state.frontShade) state.frontShade.style.opacity = "0";
        if (state.backShade) state.backShade.style.opacity = "0";

        if (state.isSingle) {
          if (state.direction === "next") {
            state.leaf.style.transform = `rotateY(${commitTurn ? -110 : 0}deg)`;
            state.leaf.style.opacity = commitTurn ? "0" : "1";
          } else {
            state.leaf.style.transform = `rotateY(${commitTurn ? 0 : -110}deg)`;
            state.leaf.style.opacity = commitTurn ? "1" : "0";
          }

          if (commitTurn) {
            currentPageNum = state.targetPageNum;
            currentState = pageNumToDesktopState(currentPageNum);
            updateBookControls(currentPageNum, currentState);
            syncPageHash(currentPageNum);
          }

          pendingCommit = () => {
            setSlotContent(leftSlot, leftBody, (commitTurn ? state.targetPageNum : state.fromPageNum) - 1);
            leafLayer.innerHTML = "";
            bookShell.classList.remove("is-settling");
          };
        } else {
          const finalState = commitTurn ? state.targetState : state.fromState;
          const finalCfg = desktopStates[finalState];

          bookShell.style.transform = `translateX(${finalCfg.shift}%)`;
          bookShell.style.setProperty("--depth-left", `${finalCfg.depthLeft}px`);
          bookShell.style.setProperty("--depth-right", `${finalCfg.depthRight}px`);
          const finalAngle =
            state.direction === "next" ? -180 * finalP : 180 * finalP;
          state.leaf.style.transform = `rotateY(${finalAngle}deg)`;

          if (commitTurn) {
            currentState = finalState;
            currentPageNum = finalCfg.pageNum;
            updateBookControls(currentPageNum, currentState);
            syncPageHash(currentPageNum);
          }

          pendingCommit = () => {
            applyShellMode(finalState);
            setSlotContent(leftSlot, leftBody, finalCfg.left);
            setSlotContent(rightSlot, rightBody, finalCfg.right);
            leafLayer.innerHTML = "";
          };
        }

        state.leaf.addEventListener("transitionend", finishTurn, { once: true });
        finishTimer = window.setTimeout(finishTurn, 400);
      };

      bookStage.addEventListener("pointerdown", (event) => {
        if (event.button !== 0 || isInteractiveTarget(event.target)) return;
        clearFlipAnimation();

        const isSingle = singlePageQuery.matches;
        let direction = null;
        let targetState = currentState;
        let targetPageNum = currentPageNum;

        if (isSingle) {
          const rect = leftSlot.getBoundingClientRect();
          const onRightHalf = event.clientX - rect.left >= rect.width * 0.5;
          if (onRightHalf && currentPageNum < totalPages) {
            direction = "next";
            targetPageNum = currentPageNum + 1;
          } else if (!onRightHalf && currentPageNum > 1) {
            direction = "prev";
            targetPageNum = currentPageNum - 1;
          }
        } else {
          const hitRight = rightSlot.contains(event.target) && !rightSlot.classList.contains("is-empty");
          const hitLeft = leftSlot.contains(event.target) && !leftSlot.classList.contains("is-empty");
          if (hitRight && currentState < desktopStates.length - 1) {
            direction = "next";
            targetState = currentState + 1;
            targetPageNum = desktopStates[targetState].pageNum;
          } else if (hitLeft && currentState > 0) {
            direction = "prev";
            targetState = currentState - 1;
            targetPageNum = desktopStates[targetState].pageNum;
          }
        }

        if (!direction) return;

        const stageRect = bookStage.getBoundingClientRect();
        const pageWidth = Math.max(160, isSingle ? stageRect.width : stageRect.width * 0.5);

        dragState = {
          pointerId: event.pointerId,
          isSingle,
          direction,
          fromState: currentState,
          targetState,
          fromPageNum: currentPageNum,
          targetPageNum,
          startX: event.clientX,
          startY: event.clientY,
          startTime: performance.now(),
          pageWidth,
          hasMounted: false,
          cancelledForScroll: false,
          progress: 0,
          leaf: null,
          frontShade: null,
          backShade: null
        };

        if (typeof bookStage.setPointerCapture === "function") {
          try {
            bookStage.setPointerCapture(event.pointerId);
          } catch (_err) {
            // Ignore synthetic pointer events without active capture
          }
        }
      });

      bookStage.addEventListener("pointermove", (event) => {
        if (!dragState || event.pointerId !== dragState.pointerId || dragState.cancelledForScroll) return;

        const dx = event.clientX - dragState.startX;
        const dy = event.clientY - dragState.startY;

        if (!dragState.hasMounted) {
          if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)) {
            dragState.cancelledForScroll = true;
            return;
          }

          if (Math.abs(dx) < 6) return;

          // Allow dragging either way on mobile single-page if user swipes opposite the tapped half
          if (dragState.isSingle) {
            if (dx < 0 && currentPageNum < totalPages) {
              dragState.direction = "next";
              dragState.targetPageNum = currentPageNum + 1;
            } else if (dx > 0 && currentPageNum > 1) {
              dragState.direction = "prev";
              dragState.targetPageNum = currentPageNum - 1;
            } else {
              return;
            }
          }

          if (motionQuery.matches) return;

          dragState.hasMounted = true;
          bookStage.classList.add("is-dragging");
          mountInteractiveLeaf(dragState);
        }

        const signedDelta = dragState.direction === "next" ? -dx : dx;
        const progress = clamp01(signedDelta / dragState.pageWidth);
        applyInteractiveProgress(dragState, progress);
      });

      const handlePointerEnd = (event) => {
        if (!dragState || event.pointerId !== dragState.pointerId) return;
        const state = dragState;
        dragState = null;

        if (typeof bookStage.releasePointerCapture === "function") {
          try {
            if (bookStage.hasPointerCapture(event.pointerId)) {
              bookStage.releasePointerCapture(event.pointerId);
            }
          } catch (_err) {
            // Ignore release errors
          }
        }

        if (state.cancelledForScroll) return;

        const dx = event.clientX - state.startX;
        const dy = event.clientY - state.startY;
        const elapsed = Math.max(1, performance.now() - state.startTime);
        const velocity = Math.abs(dx) / elapsed;

        if (!state.hasMounted) {
          // Reduced-motion swipe or clean click/tap to flip
          const isTap = Math.abs(dx) < 8 && Math.abs(dy) < 12;
          const isReducedSwipe =
            motionQuery.matches &&
            Math.abs(dx) > 36 &&
            Math.abs(dx) > Math.abs(dy);

          if (isTap || isReducedSwipe) {
            if (state.isSingle && isReducedSwipe) {
              stepBook(dx < 0 ? 1 : -1);
            } else {
              navigateToPage(state.targetPageNum, { updateHash: true });
            }
          }
          return;
        }

        const shouldCommit = state.progress > 0.22 || (velocity > 0.45 && state.progress > 0.06);
        settleInteractiveDrag(state, shouldCommit);
      };

      bookStage.addEventListener("pointerup", handlePointerEnd);
      bookStage.addEventListener("pointercancel", (event) => {
        if (!dragState || event.pointerId !== dragState.pointerId) return;
        const state = dragState;
        dragState = null;
        if (state.hasMounted) settleInteractiveDrag(state, false);
      });

      if (rangeInput) {
        rangeInput.addEventListener("input", () => {
          const val = Number(rangeInput.value);
          if (!Number.isNaN(val)) navigateToPage(val, { updateHash: true });
        });
      }

      chapterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetPage = Number(btn.dataset.bookJump);
          if (!Number.isNaN(targetPage)) navigateToPage(targetPage, { updateHash: true });
        });
      });

      bookSection.addEventListener("keydown", (event) => {
        const tag = event.target && event.target.tagName ? event.target.tagName.toLowerCase() : "";
        if (tag === "input" || tag === "textarea" || tag === "select") return;
        if (event.key === "ArrowRight") {
          event.preventDefault();
          stepBook(1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          stepBook(-1);
        } else if (event.key === "Home") {
          event.preventDefault();
          navigateToPage(1, { updateHash: true });
        } else if (event.key === "End") {
          event.preventDefault();
          navigateToPage(totalPages, { updateHash: true });
        }
      });

      window.addEventListener("hashchange", () => {
        const hashPage = parsePageHash(window.location.hash);
        if (hashPage !== null) {
          navigateToPage(hashPage, { updateHash: false });
        }
      });

      const handleBookResize = () => {
        renderImmediate(currentPageNum);
      };

      if (typeof singlePageQuery.addEventListener === "function") {
        singlePageQuery.addEventListener("change", handleBookResize);
      } else if (typeof singlePageQuery.addListener === "function") {
        singlePageQuery.addListener(handleBookResize);
      }

      const initialHashPage = parsePageHash(window.location.hash);
      renderImmediate(initialHashPage || 1);
      if (initialHashPage !== null) {
        bookSection.scrollIntoView({ behavior: motionQuery.matches ? "auto" : "smooth", block: "start" });
      }
    }
  }

  // Honest placeholder dialog for pending official links
  const dialog = document.getElementById("placeholder-dialog");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogBody = document.getElementById("dialog-body");
  const dialogClose = dialog ? dialog.querySelector("[data-dialog-close]") : null;
  let dialogTrigger = null;

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

  if (dialog && dialogTitle && dialogBody && dialogClose) {
    document.querySelectorAll("[data-placeholder]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const message = dialogMessages[trigger.dataset.placeholder];
        if (!message) return;

        dialogTrigger = trigger;
        dialogTitle.textContent = message.title;
        dialogBody.textContent = message.body;

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
      if (dialogTrigger && typeof dialogTrigger.focus === "function") {
        dialogTrigger.focus();
      }
    });
  }
})();
