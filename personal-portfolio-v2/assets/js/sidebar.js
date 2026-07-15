/**
 * Mobile Sidebar Drawer Toggler Module
 */
export function initSidebar() {
  const toggleBtn = document.getElementById("sidebar-toggle");
  const closeBtn = document.getElementById("sidebar-close");
  const overlay = document.getElementById("sidebar-overlay");
  const drawer = document.getElementById("sidebar-drawer");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  if (!toggleBtn || !drawer || !overlay) return;

  function openSidebar() {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // disable body scrolling while open
  }

  function closeSidebar() {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // restore body scrolling
  }

  // Click listeners
  toggleBtn.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // Close sidebar drawer when menu items are clicked
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });
}
