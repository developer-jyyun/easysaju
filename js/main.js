document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const category = document.getElementById("category");
  const hamburger = document.getElementById("hamburger");

  const mobileHeader = document.querySelector(".mobile-header");
  const desktopHeader = document.querySelector(".desktop-header");

  function isMobile() {
    return window.innerWidth <= 1235; // 모바일~1235px
  }

  function updateNavDisplay() {
    if (isMobile()) {
      nav.style.display = nav.classList.contains("open") ? "flex" : "none";
      if (mobileHeader) mobileHeader.style.display = "flex";
      if (desktopHeader) desktopHeader.style.display = "none";
    } else {
      nav.style.display = "flex";
      nav.classList.remove("open");
      if (mobileHeader) mobileHeader.style.display = "none";
      if (desktopHeader) desktopHeader.style.display = "flex";
    }
  }

  window.addEventListener("scroll", () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const categoryTop = category.offsetTop;

    // ✅ 헤더 shrink
    if (currentScroll > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }

    // ✅ nav 숨김/복구 (데스크탑만)
    if (!isMobile()) {
      if (currentScroll > categoryTop - 80) {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
      }
    }
  });

  // ✅ 햄버거 클릭 시 nav 토글
  hamburger.addEventListener("click", () => {
    if (isMobile()) {
      nav.classList.toggle("open");
      nav.style.display = nav.classList.contains("open") ? "flex" : "none";
    }
  });

  // ✅ 화면 크기 바뀔 때 nav 초기화
  window.addEventListener("resize", updateNavDisplay);
  // ✅ 처음 로드될 때 nav 상태 맞추기

  updateNavDisplay();
});

// ✅ target=_blank 추가
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  if (!link.hasAttribute("target")) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer"); // 보안상 권장
  }
});
