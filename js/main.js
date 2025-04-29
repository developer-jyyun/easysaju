document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const category = document.getElementById("category");
  const hamburger = document.getElementById("hamburger");

  function isMobile() {
    return window.innerWidth <= 1235; // 모바일~1235px
  }

  window.addEventListener("scroll", () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const categoryTop = category.offsetTop;

    // header shrink
    if (currentScroll > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }

    // ✅ category 영역 지나면 nav 숨기기 (데스크탑만)
    if (!isMobile()) {
      if (currentScroll > categoryTop - 80) {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex"; // 데스크탑 복구
      }
    }
  });

  // ✅ 햄버거 클릭 시 nav 토글 (모바일만)
  hamburger.addEventListener("click", () => {
    if (isMobile()) {
      nav.classList.toggle("open");
    }
  });

  // ✅ 화면 크기 바뀔 때 nav 초기화
  window.addEventListener("resize", () => {
    if (!isMobile()) {
      nav.style.display = "flex";
      nav.classList.remove("open");
    } else {
      nav.style.display = "none";
    }
  });

  // ✅ 처음 로드될 때 모바일이면 nav 숨기기
  if (isMobile()) {
    nav.style.display = "none";
  }
});

// ✅ target=_blank 추가
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  if (!link.hasAttribute("target")) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer"); // 보안상 권장
  }
});
