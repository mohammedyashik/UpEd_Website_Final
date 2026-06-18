"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl h-20 px-4 md:px-6 flex items-center justify-between">
        
        {/* BRAND IDENTITY LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logos/uped-logo.png"
            alt="UpEd Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP PREMIUM NAVIGATION */}
        <nav className="hidden items-center gap-8 lg:flex text-[14px] font-medium text-zinc-400 font-body">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          
          {/* ECOSYSTEM BLUEPRINT DROPDOWN */}
          <div className="relative">
            <button 
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-white transition-colors py-2"
            >
              Programs <ChevronDown size={14} className={`transition-transform duration-300 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {desktopDropdownOpen && (
              <div 
                onMouseLeave={() => setDesktopDropdownOpen(false)}
                className="absolute top-full left-0 w-80 mt-2 bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 shadow-2xl grid gap-2 z-50"
              >
                {/* DYNAMIC REDIRECT BACK TO YOUR LIVE JOURNEY WORKSPACE */}
                <Link 
                  href="/programs" 
                  className="p-3 rounded-xl hover:bg-white/5 block text-white font-heading font-bold border border-transparent hover:border-white/5 transition-all"
                >
                  <span className="block text-[10px] font-mono text-zinc-500 mb-0.5 tracking-widest uppercase">GRADES 1–12 • CBSE / STATE</span>
                  Academic Excellence
                </Link>

                <Link 
                  href="/programs/jee" 
                  className="p-3 rounded-xl hover:bg-white/5 block text-white font-heading font-bold border border-transparent hover:border-white/5 transition-all"
                >
                  <span className="block text-[10px] font-mono text-orange-500 mb-0.5 tracking-widest uppercase">FOR FUTURE ENGINEERS</span>
                  UPED VECTOR™ JEE
                </Link>

                <div className="p-3 rounded-xl block text-zinc-600 font-heading font-bold relative cursor-not-allowed select-none border border-transparent">
                  <span className="block text-[10px] font-mono text-zinc-600 mb-0.5 tracking-widest uppercase">FOR FUTURE DOCTORS</span>
                  UPED VECTOR™ NEET
                  <span className="absolute right-3 top-4 text-[9px] bg-white/5 text-zinc-500 font-mono px-1.5 py-0.5 rounded tracking-wide uppercase">Coming Soon</span>
                </div>
              </div>
            )}
          </div>

          <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          
          {/* EMBEDDED CAREERS SYSTEM LINK ROUTE */}
          <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
          
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* HIGH-TICKET ACTION TRIGGER */}
        <div className="hidden lg:block">
          <Link
            href="/contact?intent=assessment"
            className="bg-orange-500 text-black text-xs font-black tracking-wider uppercase px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:bg-orange-400 inline-block text-center"
          >
            Book Assessment
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] text-white lg:hidden"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE SCREEN ACTION DRAWER */}
      <div
        className={`overflow-hidden bg-black/98 backdrop-blur-3xl transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[700px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-6 space-y-1 font-body text-zinc-300">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-3 border-b border-white/5 hover:text-white transition-colors">Home</Link>
          
          {/* MOBILE ACCORDION */}
          <div className="border-b border-white/5 py-3">
            <button 
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="w-full flex justify-between items-center text-left hover:text-white transition-colors"
            >
              <span className="font-medium">Programs</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileDropdownOpen && (
              <div className="mt-3 pl-4 grid gap-2 border-l border-white/10 ml-1">
                {/* ALIGNED TO TARGET /PROGRAMS DIRECTLY WITHIN THE ACCORDION */}
                <Link 
                  href="/programs" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 block text-white font-bold text-sm"
                >
                  Academic Excellence <span className="text-[9px] font-mono text-zinc-400 bg-white/5 px-1.5 py-0.5 rounded ml-1">K-12 Journey</span>
                </Link>
                <Link 
                  href="/programs/jee" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 block text-white font-bold text-sm"
                >
                  UPED VECTOR™ JEE <span className="text-[9px] font-mono text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded ml-1">JEE Track</span>
                </Link>
                <div className="py-2 block text-zinc-600 font-bold text-sm select-none">
                  UPED VECTOR™ NEET <span className="text-[9px] font-mono bg-white/5 text-zinc-500 px-1.5 py-0.5 rounded ml-1">Coming Soon</span>
                </div>
              </div>
            )}
          </div>

          <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className="py-3 border-b border-white/5 hover:text-white transition-colors">How It Works</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-3 border-b border-white/5 hover:text-white transition-colors">About</Link>
          
          {/* MOBILE CAREERS ACCESSIBILITY LINK */}
          <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="py-3 border-b border-white/5 hover:text-white transition-colors">Careers</Link>
          
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-3 hover:text-white transition-colors">Contact</Link>

          <Link
            href="/contact?intent=assessment"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-6 bg-orange-500 text-black font-heading font-black text-xs tracking-wider uppercase py-4 rounded-xl shadow-lg shadow-orange-500/10 text-center block"
          >
            Book Assessment
          </Link>
        </div>
      </div>
    </header>
  )
}