// ⭐️ 랜덤 별 생성 스크립트
document.addEventListener("DOMContentLoaded", () => {
  const NUM_STARS = 100;
  const container = document.querySelector("main");

  for (let i = 0; i < NUM_STARS; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // 랜덤 위치
    const left = Math.random() * 100;
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;

    // 랜덤 크기와 반짝임 속도
    const size = Math.random() * 1.5 + 0.5;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const duration = Math.random() * 2 + 1.5;
    star.style.animationDuration = `${duration}s`;

    // 삽입
    container.appendChild(star);
  }
});
