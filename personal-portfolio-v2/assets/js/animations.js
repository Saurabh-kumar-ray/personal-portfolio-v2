/**
 * Libraries & Visual Animations Coordinator Module
 */

/**
 * Dismiss loading screen with smooth fade animation
 */
export function dismissPreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); // matching CSS duration
  }
}

/**
 * Initialize AOS (Animate on Scroll)
 */
export function initScrollAnimations() {
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
}

/**
 * Initialize Typed.js typing banner in Hero
 * @param {Array<string>} subtitles - Subtitles list from profile JSON
 */
export function initTypingAnimation(subtitles) {
  const element = document.getElementById("typed-subtitle");
  if (element && window.Typed && subtitles && subtitles.length > 0) {
    new window.Typed("#typed-subtitle", {
      strings: subtitles,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }
}

/**
 * Manage Back-to-Top scroll behavior
 */
export function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  // Toggle button state based on scroll depth
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Smooth scroll to top on click
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
