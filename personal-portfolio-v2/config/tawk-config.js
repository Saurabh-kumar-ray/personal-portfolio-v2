/**
 * Tawk.to Live Chat Integration Module
 */

/**
 * Dynamically injects the Tawk.to script using coordinates from profile configurations.
 * Allows widget disabling if default credentials remain unconfigured.
 * @param {string} propertyId - Property Identifier from Tawk dashboard
 * @param {string} widgetId - Widget ID from Tawk dashboard
 */
export function initTawkChat(propertyId, widgetId) {
  if (
    !propertyId ||
    !widgetId ||
    propertyId === "default_property_id" ||
    widgetId === "default_widget_id"
  ) {
    console.info("Tawk.to live chat is in standby. Set active IDs in data/profile.json to enable.");
    return;
  }

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  (function () {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
}
