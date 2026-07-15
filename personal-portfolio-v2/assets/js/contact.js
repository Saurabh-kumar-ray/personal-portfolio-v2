/**
 * Contact Form Verification & Submissions controller
 */
export function initContactForm() {
  const form = document.getElementById("contact-form");
  const alertContainer = document.getElementById("contact-alert-container");

  if (!form || !alertContainer) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Clear previous alert states
    alertContainer.innerHTML = "";

    // Elements
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");
    const submitBtn = document.getElementById("contact-submit-btn");

    let isValid = true;

    // Helper functions for validation UI
    function validateField(input, condition) {
      if (condition) {
        input.classList.remove("is-invalid");
      } else {
        input.classList.add("is-invalid");
        isValid = false;
      }
    }

    // Validation rules
    validateField(nameInput, nameInput.value.trim() !== "");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(emailInput, emailRegex.test(emailInput.value.trim()));

    validateField(subjectInput, subjectInput.value.trim() !== "");
    validateField(messageInput, messageInput.value.trim() !== "");

    if (!isValid) {
      return; // Stop if validations fail
    }

    // Capture button original state and show loading indicator
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';

    try {
      // Simulate API network latency (1.5s delay)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Inject visual success alert banner
      alertContainer.innerHTML = `
        <div class="alert-custom alert-success-custom animate-fade-in-up">
          <i class="fa-solid fa-circle-check fs-5"></i>
          <div>
            <strong>Message Transmitted Successfully!</strong> Thank you, ${escapeHtmlName(nameInput.value.trim())}. Saurabh will get in touch with you shortly.
          </div>
        </div>
      `;

      // Reset form controls
      form.reset();

      // Clear validation marks
      nameInput.classList.remove("is-invalid");
      emailInput.classList.remove("is-invalid");
      subjectInput.classList.remove("is-invalid");
      messageInput.classList.remove("is-invalid");
    } catch (error) {
      alertContainer.innerHTML = `
        <div class="alert-custom alert-danger-custom animate-fade-in-up">
          <i class="fa-solid fa-circle-xmark fs-5"></i>
          <div>
            <strong>Transmission Failure!</strong> An error occurred while submitting. Please try again.
          </div>
        </div>
      `;
    } finally {
      // Restore submit button state
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  // Simple name escaper to prevent client XSS in dynamic success text
  function escapeHtmlName(name) {
    return name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
}
