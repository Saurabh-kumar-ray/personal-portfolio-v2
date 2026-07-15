/**
 * Sticky Navbar & Scrollspy Controller Module
 */
export function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".navbar-link, .sidebar-link");
  const sections = document.querySelectorAll("section");

  if (!navbar) return;

  // Toggle scrolled class based on scroll depth
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Scrollspy behavior
    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120; // accounting for sticky nav height
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  }

  // Scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Run on load
  handleScroll();
}
