"use server";

/**
 * Submit contact message (Mock / Serverless Action)
 * Validates inputs, logs message to console, and returns success response.
 * Easy to extend to any external API / Email webhook.
 */
export async function submitContactMessage(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const content = formData.get("message") as string;

  // 1. Basic validation checks
  if (!name || name.trim() === "") {
    return { success: false, error: "Please enter your full name." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (!subject || subject.trim() === "") {
    return { success: false, error: "Please enter a subject." };
  }
  if (!content || content.trim() === "") {
    return { success: false, error: "Please enter a message." };
  }

  // 2. Log message to server console (visible in dev terminal)
  console.log("=========================================");
  console.log("📩 NEW CONTACT INQUIRY RECEIVED");
  console.log(`From:    ${name.trim()} <${email.trim()}>`);
  console.log(`Subject: ${subject.trim()}`);
  console.log("Message:");
  console.log(content.trim());
  console.log("=========================================");

  // 3. Webhook Extension Template (Optional)
  // if (process.env.CONTACT_FORM_WEBHOOK) {
  //   try {
  //     await fetch(process.env.CONTACT_FORM_WEBHOOK, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ name, email, subject, message: content }),
  //     });
  //   } catch (err) {
  //     console.error("Failed to forward contact inquiry to webhook:", err);
  //   }
  // }

  // Simulate network latency (0.8s delay for realistic user loading state)
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: `Thank you, ${name.trim()}. Your message was sent successfully! Saurabh will get in touch with you shortly.`,
  };
}
