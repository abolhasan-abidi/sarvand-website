"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = [
  { label: "خانه", href: "#home" },
  { label: "خدمات", href: "#services" },
  { label: "پروژه‌ها", href: "#projects" },
  { label: "درباره ما", href: "#about" },
  { label: "تماس با ما", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" id="home">
      <div className="header-inner">
        <a
          className="brand"
          href="#home"
          aria-label="سروند، صفحه اصلی"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            className="brand-mark"
            src="/images/sarvand-mark.png"
            alt=""
            width={40}
            height={54}
            priority
          />
          <span className="brand-copy" aria-hidden="true">
            <span className="brand-name">سروند</span>
            <span className="brand-latin">SARVAND</span>
          </span>
        </a>

        <nav className="main-navigation" aria-label="ناوبری اصلی">
          {navigation.map((item) => (
            <a
              className={`navigation-link${item.href === "#home" ? " navigation-link-active" : ""}`}
              href={item.href}
              key={item.href}
              aria-current={item.href === "#home" ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "بستن فهرست" : "باز کردن فهرست"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d={menuOpen ? "M5 5L19 19M19 5L5 19" : "M4 7H20M4 12H20M4 17H20"}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <a className="contact-link" href="#contact" onClick={() => setMenuOpen(false)}>
          مشاوره رایگان <span className="link-dot" aria-hidden="true" />
        </a>

        <nav
          className={`mobile-navigation${menuOpen ? " mobile-navigation-open" : ""}`}
          id="mobile-navigation"
          aria-label="ناوبری موبایل"
        >
          {navigation.map((item) => (
            <a
              className={`mobile-navigation-link${item.href === "#home" ? " mobile-navigation-link-active" : ""}`}
              href={item.href}
              key={item.href}
              aria-current={item.href === "#home" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
