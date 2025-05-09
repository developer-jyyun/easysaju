document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // ✅ 다크/라이트 모드 토글
  const modeBtn = document.getElementById("mode-toggle");
  const modeIcon = document.getElementById("mode-icon");

  modeBtn?.addEventListener("click", () => {
    const isLight = body.classList.contains("light-ver");

    if (isLight) {
      body.classList.remove("light-ver");
      body.classList.add("dark-ver");
      modeIcon.classList.remove("ri-sun-line");
      modeIcon.classList.add("ri-moon-fill");
      modeIcon.classList.remove("bg-white", "text-black");
      modeIcon.classList.add("bg-gray-500", "text-white");
    } else {
      body.classList.remove("dark-ver");
      body.classList.add("light-ver");
      modeIcon.classList.remove("ri-moon-fill");
      modeIcon.classList.add("ri-sun-line");
      modeIcon.classList.remove("bg-gray-500", "text-white");
      modeIcon.classList.add("bg-white", "text-black");
    }
  });

  // ✅ 모바일 메뉴 토글 (햄버거 버튼)
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-main-menu");
  const icon = hamburger.querySelector("i");
  let isMenuOpen = false;

  hamburger?.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    // 아이콘 변경
    icon?.classList.toggle("ri-menu-line", !isMenuOpen);
    icon?.classList.toggle("ri-close-line", isMenuOpen);

    if (isMenuOpen) {
      // hidden 먼저 제거
      mobileMenu.classList.remove("hidden");
      // 열기
      mobileMenu.classList.remove("slide-fade-up");
      mobileMenu.classList.add("slide-fade-down");
    } else {
      // 닫기
      mobileMenu.classList.remove("slide-fade-down");
      mobileMenu.classList.add("slide-fade-up");

      // 닫힘 후 hidden 처리
      setTimeout(() => {
        if (!isMenuOpen) {
          mobileMenu.classList.add("hidden");
        }
      }, 400); // css duration과 일치
    }
  });

  const headerEl = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 10) {
      headerEl.classList.add("scrolled");
    } else {
      headerEl.classList.remove("scrolled");
    }
  });

  // ✅ 외부 링크는 새 창으로 열기
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    if (!link.hasAttribute("target")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
