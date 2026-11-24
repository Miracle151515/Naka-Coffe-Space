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

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 20);
  };

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

  // Active nav highlighting on Home
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const homeSectionIds = ["top", "our-space", "location", "contact"];
  const homeSections = homeSectionIds.map((id) => document.getElementById(id)).filter(Boolean);

  const updateActiveNavigation = () => {
    if (page !== "home" || !homeSections.length) return;

    const marker = (header ? header.offsetHeight : 0) + window.innerHeight * 0.28;
    let currentId = homeSections[0].id;

    homeSections.forEach((section) => {
      if (section.getBoundingClientRect().top <= marker) {
        currentId = section.id;
      }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      currentId = "contact";
    }

    navLinks.forEach((link) => {
      if (link.dataset.nav === currentId) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  let scrollFrame = null;
  const handleScroll = () => {
    if (scrollFrame !== null) return;
    scrollFrame = window.requestAnimationFrame(() => {
      setHeaderState();
      updateActiveNavigation();
      scrollFrame = null;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", updateActiveNavigation, { passive: true });
  setHeaderState();
  updateActiveNavigation();

  // Scroll reveal respecting reduced motion and keyboard focus
  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!motionQuery.matches && "IntersectionObserver" in window) {
    revealItems.forEach((item) => {
      if (item.getBoundingClientRect().top > window.innerHeight) {
        item.classList.add("is-pending");
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("is-pending");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );

    revealItems.forEach((item) => {
      if (item.classList.contains("is-pending")) revealObserver.observe(item);
    });

    const revealNow = (item) => {
      if (!item || !item.classList.contains("is-pending")) return;
      item.classList.add("is-instant");
      item.classList.remove("is-pending");
      revealObserver.unobserve(item);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => item.classList.remove("is-instant"));
      });
    };

    const revealAround = (node) => {
      if (!node || !node.closest) return;
      revealNow(node.closest("[data-reveal]"));
      document.querySelectorAll("[data-reveal].is-pending").forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) revealNow(item);
      });
    };

    document.addEventListener("focusin", (event) => revealAround(event.target), true);
    window.addEventListener("hashchange", () => {
      revealAround(document.getElementById(location.hash.slice(1)));
    });
  }

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
          if (match) shot.classList.remove("is-pending");
        });
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
