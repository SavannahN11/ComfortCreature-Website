// slideshow.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slides");
  if (!slides.length) return;

  let i = 0;
  const delay = 4500; // time each slide stays visible (4.5s)
  const fade = 600;   // must match CSS transition (0.6s)

  slides[i].classList.add("active");

  function nextSlide() {
    const current = slides[i];
    i = (i + 1) % slides.length;
    const next = slides[i];

    // fade current out, next in
    next.classList.add("active");
    setTimeout(() => current.classList.remove("active"), fade);
  }

  setInterval(nextSlide, delay);
});
