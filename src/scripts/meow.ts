function createMeowEffect() {
  let clickCount = 0;
  let resetTimeout: ReturnType<typeof setTimeout> | null = null;
  const baseSize = 10;
  const maxSize = 256;

  document.addEventListener("click", (event) => {
    clickCount++;

    if (resetTimeout) {
      clearTimeout(resetTimeout);
    }

    resetTimeout = setTimeout(() => {
      clickCount = 0;
    }, 800);

    const sizeMultiplier = 1 + Math.pow(clickCount * 0.3, 1.2);
    const currentSize = Math.min(baseSize * sizeMultiplier, maxSize);

    const randomX = (Math.random() - 0.5) * 40;
    const randomY = (Math.random() - 0.5) * 40;

    const meow = document.createElement("div");
    meow.innerText = "meow!";

    Object.assign(meow.style, {
      position: "fixed",
      left: `${event.clientX + randomX}px`,
      top: `${event.clientY + randomY}px`,
      transform: "translate(-50%, -50%)",
      color: "#6b7280",
      fontFamily: "Pacifico, cursive",
      fontSize: `${currentSize}px`,
      fontWeight: "normal",
      pointerEvents: "none",
      zIndex: "9999",
      opacity: "1",
      transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      userSelect: "none",
    });

    document.body.appendChild(meow);

    const scaleAmount = 1.2 + Math.min(clickCount * 0.05, 0.8);
    requestAnimationFrame(() => {
      meow.style.opacity = "0";
      meow.style.transform = `translate(-50%, -50%) scale(${scaleAmount})`;
    });

    setTimeout(() => {
      if (meow.parentNode) {
        document.body.removeChild(meow);
      }
    }, 600);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createMeowEffect);
} else {
  createMeowEffect();
}
