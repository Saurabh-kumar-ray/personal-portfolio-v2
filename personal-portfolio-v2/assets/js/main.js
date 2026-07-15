/**
 * Core Application Bootstrapper & Coordinator
 */
import { initTheme } from "./theme.js";
import { initNavbar } from "./navbar.js";
import { initSidebar } from "./sidebar.js";
import { bootstrapData } from "./data-loader.js";
import { initContactForm } from "./contact.js";
import { initTawkChat } from "../../config/tawk-config.js";
import {
  dismissPreloader,
  initScrollAnimations,
  initTypingAnimation,
  initBackToTop,
} from "./animations.js";

// Run bootstrap when DOM content is fully loaded
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // 1. Initialize UI Frame controllers
    initTheme();
    initNavbar();
    initSidebar();
    initBackToTop();
    initContactForm();

    // 2. Fetch and render JSON content
    const profile = await bootstrapData();

    // 3. Trigger animations based on fetched profile data
    if (profile) {
      initTypingAnimation(profile.subtitles);

      // Initialize Tawk.to live chat
      initTawkChat(profile.tawkPropertyId, profile.tawkWidgetId);
    }

    // 4. Initialize scroll triggers (AOS)
    initScrollAnimations();
  } catch (error) {
    console.error("Critical error during application bootstrapping sequence:", error);
  } finally {
    // 5. Dismiss preloader loading state
    dismissPreloader();
  }
});
