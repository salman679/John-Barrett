"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "#",
    submenu: [
      { name: "Leadership Coaching", href: "/services/leadership-coaching" },
      { name: "Executive Coaching", href: "/services/executive-coaching" },
      { name: "Workshops & Training", href: "/services/workshops" },
      { name: "Keynote Speaking", href: "/services/keynote-speaking" },
    ],
  },
  { name: "Programs", href: "/programs" },
  { name: "About", href: "/about" },
  { name: "Results", href: "/results" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="section-container py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-2xl font-display font-bold tracking-tight transition-colors",
                  scrolled ? "text-navy-900" : "text-white"
                )}
              >
                John Barrett
              </span>
              <span
                className={cn(
                  "text-sm font-medium tracking-wider transition-colors",
                  scrolled ? "text-gold-600" : "text-gold-400"
                )}
              >
                LEADERSHIP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.submenu && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                        scrolled
                          ? "text-navy-700 hover:text-royal-600 hover:bg-navy-50"
                          : "text-white hover:text-gold-300 hover:bg-white/10"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-navy-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-3 text-sm font-medium text-navy-700 hover:text-royal-600 hover:bg-navy-50 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                      scrolled
                        ? "text-navy-700 hover:text-royal-600 hover:bg-navy-50"
                        : "text-white hover:text-gold-300 hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              href="/contact"
              className={cn(
                "btn-primary",
                !scrolled && "bg-gold-500 hover:bg-gold-600"
              )}
            >
              Book a Strategy Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled
                ? "text-navy-700 hover:bg-navy-50"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2 bg-white rounded-2xl shadow-2xl p-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-navy-700 hover:text-royal-600 hover:bg-navy-50 rounded-lg transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform",
                            activeDropdown === item.name && "rotate-180"
                          )}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm font-medium text-navy-600 hover:text-royal-600 hover:bg-navy-50 rounded-lg transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-semibold text-navy-700 hover:text-royal-600 hover:bg-navy-50 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="btn-primary mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
