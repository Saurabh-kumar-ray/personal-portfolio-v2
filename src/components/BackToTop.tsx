"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      id="back-to-top"
      className={`back-to-top ${visible ? "show" : ""}`}
      aria-label="Scroll back to top of the page"
      type="button"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
