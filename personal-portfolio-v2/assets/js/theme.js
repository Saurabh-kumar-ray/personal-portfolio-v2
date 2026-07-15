/**
 * Theme Manager Module (Dark / Light Mode)
 */
export function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  // Toggle Theme Function
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const targetTheme = currentTheme === "dark" ? "light" : "dark";

    // Disable transitions temporarily to prevent layout flash during change
    document.body.classList.add("theme-transition-disabled");

    // Apply new theme
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("portfolio-theme", targetTheme);

    // Force repaint to make transition disable work properly
    window.getComputedStyle(document.body).opacity;

    // Enable transitions again
    setTimeout(() => {
      document.body.classList.remove("theme-transition-disabled");
    }, 20);
  }

  // Click event listener
  themeToggle.addEventListener("click", toggleTheme);
}
