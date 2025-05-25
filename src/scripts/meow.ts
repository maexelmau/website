function createMeowEffect() {
  document.addEventListener("click", (event) => {
    const meow = document.createElement("div");
    meow.innerText = "meow!";
    meow.style.position = "fixed";
    meow.style.transform = "translateX(-50%)";
    meow.style.left = `${event.clientX}px`;
    meow.style.top = `${event.clientY - 20}px`;
    meow.style.color = "#000000";
    meow.style.fontFamily = "Arial, sans-serif";
    meow.style.fontWeight = "bold";
    meow.style.fontSize = "12px";
    meow.style.pointerEvents = "none";
    meow.style.zIndex = "9999";
    meow.style.opacity = "1";
    meow.style.transition = "opacity 1s ease-out, transform 1s ease-out";

    document.body.appendChild(meow);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        meow.style.opacity = "0";
        meow.style.transform = "translateY(-20px)";
      });
    });

    setTimeout(() => {
      document.body.removeChild(meow);
    }, 1000);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createMeowEffect);
} else {
  createMeowEffect();
}
