document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const category = document.getElementById("category");
  const hamburger = document.getElementById("hamburger");

  window.addEventListener("scroll", () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const categoryTop = category.offsetTop;

    // header shrink (줄어들게 하는 거)
    if (currentScroll > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }

    // ✅ category 영역 지나면 nav 숨기기
    if (currentScroll > categoryTop - 80) {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex"; // 다시 flex로 복구
    }
  });

  // 햄버거 메뉴 클릭 시 nav 열기 (모바일용)
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});
