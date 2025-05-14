document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // ✅ 다크/라이트 모드 관련 요소
  const modeBtn = document.getElementById("mode-toggle");
  const modeIcon = document.getElementById("mode-icon");
  const modeMobileBtn = document.getElementById("mobile-mode-toggle");

  // ✅ 햄버거 메뉴 관련 요소
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-main-menu");
  const icon = hamburger?.querySelector("i");
  let isMenuOpen = false;

  // ✅ 모드 토글 함수
  function toggleMode() {
    const isLight = body.classList.contains("light-ver");
    body.classList.toggle("light-ver", !isLight);
    body.classList.toggle("dark-ver", isLight);
    updateModeUI();
  }

  // ✅ 아이콘 및 UI 업데이트
  function updateModeUI() {
    const isLight = body.classList.contains("light-ver");

    // PC 아이콘
    if (modeIcon) {
      modeIcon.classList.toggle("ri-sun-line", isLight);
      modeIcon.classList.toggle("ri-moon-fill", !isLight);
      modeIcon.classList.toggle("bg-white", isLight);
      modeIcon.classList.toggle("text-black", isLight);
      modeIcon.classList.toggle("bg-gray-500", !isLight);
      modeIcon.classList.toggle("text-white", !isLight);
    }

    // 모바일 버튼 텍스트
    if (modeMobileBtn) {
      modeMobileBtn.textContent = isLight ? "🌞 모드 전환" : "🌗 모드 전환";
    }
  }

  // ✅ 이벤트 연결
  modeBtn?.addEventListener("click", toggleMode);
  modeMobileBtn?.addEventListener("click", toggleMode);

  // ✅ 모바일 메뉴 토글
  hamburger?.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    // 아이콘 변경
    icon?.classList.toggle("ri-menu-line", !isMenuOpen);
    icon?.classList.toggle("ri-close-line", isMenuOpen);

    // 메뉴 애니메이션
    mobileMenu.classList.remove("hidden");

    if (isMenuOpen) {
      mobileMenu.classList.remove("slide-fade-up");
      mobileMenu.classList.add("slide-fade-down");
    } else {
      mobileMenu.classList.remove("slide-fade-down");
      mobileMenu.classList.add("slide-fade-up");

      setTimeout(() => {
        if (!isMenuOpen) {
          mobileMenu.classList.add("hidden");
        }
      }, 400); // CSS duration과 동일
    }
  });

  // ✅ 헤더 스크롤 시 스타일 변경
  const headerEl = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;
    headerEl.classList.toggle("scrolled", scrollY > 10);
  });

  // ✅ 외부 링크 새 창으로 열기
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    if (!link.hasAttribute("target")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });

  // ✅ 페이지 로드시 아이콘 상태 초기화
  updateModeUI();
});
