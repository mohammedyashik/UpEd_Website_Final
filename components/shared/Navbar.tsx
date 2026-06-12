"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  onBookClick?: () => void
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleCtaClick = () => {
    setMobileMenuOpen(false)
    if (onBookClick) {
      onBookClick()
    } else {
      // Smooth fallback if rendered standalone
      window.location.href = "/contact"
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
      <div className="container-width flex h-[78px] items-center justify-between px-4 md:px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logos/uped-logo.png"
            alt="UpEd Logo"
            className="h-[42px] w-auto object-contain md:h-[48px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-10 lg:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/programs">Programs</NavLink>
          <NavLink href="/how-it-works">How It Works</NavLink>
          <NavLink href="/careers">Careers</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* RIGHT CTA (ACTIVATED) */}
        <div className="hidden lg:block">
          <button
            onClick={handleCtaClick}
            className="orange-glow h-[54px] rounded-full bg-orange-500 px-7 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-orange-400"
          >
            Book Free Demo
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white backdrop-blur-xl lg:hidden"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-3xl transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-5">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/programs">Programs</MobileNavLink>
          <MobileNavLink href="/how-it-works">How It Works</MobileNavLink>
          <MobileNavLink href="/careers">Careers</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>

          {/* CTA (ACTIVATED) */}
          <button
            onClick={handleCtaClick}
            className="mt-5 h-[56px] rounded-full bg-orange-500 text-sm font-bold text-black hover:bg-orange-400 transition-colors"
          >
            Book Free Class
          </button>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[15px] font-medium text-zinc-300 transition-all duration-300 hover:text-white"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="border-b border-white/5 py-4 text-base font-medium text-white"
    >
      {children}
    </Link>
  )
}