"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

interface NavbarProps {
  socials: SocialLink[];
}

export default function Navbar({ socials }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar scrolled class
      setScrolled(window.scrollY > 50);

      // 2. Scrollspy behavior
      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "hero";
      
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop - 150;
        const sectionHeight = el.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSectionId = el.getAttribute("id") || "hero";
        }
      });
      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      {/* Header & Sticky Navbar */}
      <header>
        <nav id="navbar" className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
          <div className="container navbar-container">
            <a href="#" className="navbar-logo" id="logo-title">
              <i className="fa-solid fa-code"></i> SAURABH<span>.</span>
            </a>

            {/* Desktop Navigation Menu */}
            <ul className="navbar-menu">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`navbar-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="navbar-actions">
              {/* Theme Toggle Widget (Dark/Light mode) */}
              <ThemeToggle />

              {/* Mobile Navigation Hamburger */}
              <button
                onClick={() => toggleSidebar(true)}
                id="sidebar-toggle"
                className="navbar-toggler-btn theme-toggle-btn d-lg-none border-0 bg-transparent"
                aria-label="Toggle navigation drawer"
                type="button"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Sidebar Drawer */}
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={() => toggleSidebar(false)}
      ></div>
      <div className={`sidebar-drawer ${isOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <div className="navbar-logo">
            <i className="fa-solid fa-code"></i> SAURABH<span>.</span>
          </div>
          <button
            onClick={() => toggleSidebar(false)}
            id="sidebar-close"
            className="sidebar-close-btn border-0 bg-transparent"
            aria-label="Close sidebar menu"
            type="button"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul className="sidebar-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => toggleSidebar(false)}
                className={`sidebar-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <p className="text-muted small">Connect with me</p>
          <div id="sidebar-socials-container" className="sidebar-socials">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Saurabh on ${social.platform}`}
                className="theme-toggle-btn"
                style={{ color: social.color }}
              >
                <i className={`fa-brands ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
