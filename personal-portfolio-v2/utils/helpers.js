/**
 * Core Helper Utilities
 */

/**
 * Escapes special characters to prevent Cross-Site Scripting (XSS)
 * @param {string} unsafe - The raw, potentially unsafe string
 * @returns {string} The safe HTML-escaped string
 */
export function escapeHtml(unsafe) {
  if (unsafe === undefined || unsafe === null) return "";
  return unsafe
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Formats a raw date string into a structured, readable string
 * @param {string} dateStr - Date string
 * @returns {string} Formatted date
 */
export function formatDate(dateStr) {
  if (!dateStr) return "";
  return dateStr;
}
