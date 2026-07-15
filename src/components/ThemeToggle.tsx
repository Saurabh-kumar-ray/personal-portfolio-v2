"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    // Sync initial state on component load
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    
    // Temporarily disable CSS transitions to prevent visual glitches during theme change
    document.body.classList.add("theme-transition-disabled");

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);

    // Force repaint to make the transition disabling effective
    window.getComputedStyle(document.body).opacity;

    setTimeout(() => {
      document.body.classList.remove("theme-transition-disabled");
    }, 20);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle visual theme"
      type="button"
    >
      <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
    </button>
  );
}
