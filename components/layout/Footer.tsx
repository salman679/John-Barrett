import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";

const footerNavigation = {
  services: [
    { name: "Leadership Coaching", href: "/services/leadership-coaching" },
    { name: "Executive Coaching", href: "/services/executive-coaching" },
    { name: "Workshops & Training", href: "/services/workshops" },
    { name: "Keynote Speaking", href: "/services/keynote-speaking" },
  ],
  company: [
    { name: "About John", href: "/about" },
    { name: "Client Results", href: "/results" },
    { name: "Programs", href: "/programs" },
    { name: "Blog", href: "/blog" },
  ],
  resources: [
    { name: "Free Resources", href: "/resources" },
    { name: "Leadership Insights", href: "/blog" },
    { name: "Book a Call", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "YouTube", href: "#", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <div className="flex flex-col mb-6">
                <span className="text-3xl font-display font-bold tracking-tight text-white">
                  John Barrett
                </span>
                <span className="text-sm font-medium tracking-wider text-gold-400">
                  LEADERSHIP
                </span>
              </div>
            </Link>
            <p className="text-navy-200 text-base leading-relaxed mb-6 max-w-md">
              Transforming leaders and organizations through world-class
              coaching, proven frameworks, and 20+ years of expertise in
              leadership development.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@johnbarrettleadership.com"
                className="flex items-center text-navy-200 hover:text-gold-400 transition-colors group"
              >
                <Mail className="h-5 w-5 mr-3 text-gold-500 group-hover:text-gold-400" />
                <span className="text-sm">info@johnbarrettleadership.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-navy-200 hover:text-gold-400 transition-colors group"
              >
                <Phone className="h-5 w-5 mr-3 text-gold-500 group-hover:text-gold-400" />
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-200 hover:text-gold-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-200 hover:text-gold-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-200 hover:text-gold-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-navy-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-navy-300 hover:text-gold-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-sm text-navy-300">
              &copy; {new Date().getFullYear()} John Barrett Leadership. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
