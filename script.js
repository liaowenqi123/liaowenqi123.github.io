const yearNode = document.querySelector("[data-year]");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const sparkles = document.querySelector("[data-sparkles]");
if (sparkles) {
  const count = 18;
  for (let index = 0; index < count; index += 1) {
    const sparkle = document.createElement("span");
    const size = 4 + Math.random() * 8;
    sparkle.className = "sparkle";
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 8}s`;
    sparkle.style.animationDuration = `${8 + Math.random() * 12}s`;
    sparkles.appendChild(sparkle);
  }
}

const revealTargets = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window && revealTargets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

