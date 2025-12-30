import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "Philosophy" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#investment", label: "Investment" },
  { href: "#contact", label: "Contact" },
];

const markets = [
  "Paradise Valley",
  "Scottsdale",
  "Arcadia",
  "Biltmore",
];

export function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E8E4DF]">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <Link href="/" className="block">
            <span className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2824]">
              Crea
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-[#6B6560]">
            &copy; {new Date().getFullYear()} Crea Development. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-sm text-[#6B6560] hover:text-[#8B7355] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#6B6560] hover:text-[#8B7355] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
