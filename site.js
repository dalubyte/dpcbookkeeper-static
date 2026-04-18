// Simple: nav scroll state + progress bar. Reveal animations are CSS-only (.fade-up).
(function () {
  const nav = document.querySelector('.nav');
  const progress = document.querySelector('.scroll-progress');
  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 12);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = Math.min(100, (y / max) * 100) + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
