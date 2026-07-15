"use client";

import { useState, useRef } from "react";
import { submitContactMessage } from "@/app/actions";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message?: string; error?: string } | null>(null);

  // Field validation states
  const [validity, setValidity] = useState({
    name: true,
    email: true,
    subject: true,
    message: true,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Client-side validations
    const nameValid = name.trim() !== "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(email.trim());
    const subjectValid = subject.trim() !== "";
    const messageValid = message.trim() !== "";

    setValidity({
      name: nameValid,
      email: emailValid,
      subject: subjectValid,
      message: messageValid,
    });

    if (!nameValid || !emailValid || !subjectValid || !messageValid) {
      return;
    }

    setIsPending(true);

    try {
      const response = await submitContactMessage(null, formData);
      if (response.success) {
        setStatus({ success: true, message: response.message });
        formRef.current?.reset();
      } else {
        setStatus({ success: false, error: response.error });
      }
    } catch (err) {
      setStatus({
        success: false,
        error: "An unexpected error occurred during submission. Please try again later.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      {/* Alert Banner Mount Point */}
      {status && (
        <div className="mb-4" style={{ maxWidth: "650px", margin: "0 auto 1.5rem auto" }}>
          {status.success ? (
            <div className="alert-custom alert-success-custom animate-fade-in-up">
              <i className="fa-solid fa-circle-check fs-5"></i>
              <div>
                <strong>Message Transmitted Successfully!</strong> {status.message}
              </div>
            </div>
          ) : (
            <div className="alert-custom alert-danger-custom animate-fade-in-up">
              <i className="fa-solid fa-circle-xmark fs-5"></i>
              <div>
                <strong>Transmission Failure!</strong> {status.error}
              </div>
            </div>
          )}
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="contact-form"
        data-aos="fade-up"
        noValidate
      >
        <div className="row">
          <div className="col-md-6 form-group">
            <label htmlFor="contact-name" className="form-label">Full Name</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              className={`form-control-custom ${!validity.name ? "is-invalid" : ""}`}
              placeholder="Alex Morgan"
              required
            />
            <div className="invalid-feedback">Please enter your name.</div>
          </div>
          <div className="col-md-6 form-group">
            <label htmlFor="contact-email" className="form-label">Email Address</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              className={`form-control-custom ${!validity.email ? "is-invalid" : ""}`}
              placeholder="alex@example.com"
              required
            />
            <div className="invalid-feedback">Please enter a valid email address.</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="contact-subject" className="form-label">Subject</label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            className={`form-control-custom ${!validity.subject ? "is-invalid" : ""}`}
            placeholder="Project Collaboration Proposal"
            required
          />
          <div className="invalid-feedback">Please enter a subject.</div>
        </div>
        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">Message</label>
          <textarea
            id="contact-message"
            name="message"
            className={`form-control-custom ${!validity.message ? "is-invalid" : ""}`}
            placeholder="Hi Saurabh, I would love to discuss..."
            required
          ></textarea>
          <div className="invalid-feedback">Please enter your message.</div>
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            id="contact-submit-btn"
            className="btn-custom btn-primary-custom"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <i className="fa-solid fa-spinner fa-spin me-2"></i> Sending message...
              </>
            ) : (
              <>
                Send Message <i className="fa-solid fa-paper-plane ms-1"></i>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
