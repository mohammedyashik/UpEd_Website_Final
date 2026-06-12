"use client"

interface FooterProps {
  onBookClick?: () => void
}

export default function Footer({ onBookClick }: FooterProps) {
  const handleFooterCtaClick = () => {
    if (onBookClick) {
      onBookClick()
    } else {
      window.location.href = "/contact"
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* GLOW EFFECT */}
      <div className="absolute left-1/2 top-[-120px] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* TOP BLOCK */}
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* BRAND PILLAR */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/logos/uped-logo.png" alt="UpEd Logo" className="h-12 w-auto" />
              <div>
                <h2 className="text-2xl font-black text-white">UpEd</h2>
                <p className="text-sm text-orange-400">Personalized Academic Excellence</p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-[1.9] text-zinc-400">
              UpEd helps students achieve academic success through personalized mentorship, structured learning programs, and dedicated academic support designed for long-term growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold text-orange-300">
                5000+ Students Supported
              </div>
              <div className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold text-orange-300">
                CBSE Focused Programs
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <div className="mt-5 grid gap-4">
              <a href="/" className="text-sm text-zinc-400 transition hover:text-orange-400">Home</a>
              <a href="/programs" className="text-sm text-zinc-400 transition hover:text-orange-400">Programs</a>
              <a href="/about" className="text-sm text-zinc-400 transition hover:text-orange-400">About</a>
              <a href="/contact" className="text-sm text-zinc-400 transition hover:text-orange-400">Contact</a>
              <a href="/faq" className="text-sm text-zinc-400 transition hover:text-orange-400">FAQ</a>
            </div>
          </div>

          {/* ACADEMIC PROGRAMS LINK WRAPPER */}
          <div>
            <h3 className="text-lg font-bold text-white">Programs</h3>
            <div className="mt-5 grid gap-4">
              <p className="text-sm text-zinc-400">Primary Academic Support</p>
              <p className="text-sm text-zinc-400">Middle School Mentorship</p>
              <p className="text-sm text-zinc-400">Board Exam Preparation</p>
              <p className="text-sm text-zinc-400">PCM / PCB Coaching</p>
            </div>
          </div>

          {/* DIRECT CORPORATE CONTACT DATA */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <div className="mt-5 grid gap-4">
              <p className="text-sm leading-[1.8] text-zinc-400">Madurai, Tamil Nadu</p>
              <p className="text-sm text-zinc-400">support@uped.in</p>
              <p className="text-sm text-zinc-400">+91 95668 57390</p>
            </div>

            {/* ACTIVATED BUTTON */}
            <button
              onClick={handleFooterCtaClick}
              className="mt-6 h-12 w-full sm:w-auto rounded-2xl bg-orange-500 px-6 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-orange-400"
            >
              Book Consultation
            </button>
          </div>
        </div>

        {/* BOTTOM METRICS & COMPLIANCE */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 text-center md:flex-row">
          <p className="text-sm text-zinc-500">© 2026 UpEd Learning Solutions. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="/privacy-policy" className="text-sm text-zinc-500 transition hover:text-orange-400">Privacy Policy</a>
            <a href="/terms" className="text-sm text-zinc-500 transition hover:text-orange-400">Terms & Conditions</a>
            <a href="/refund-policy" className="text-sm text-zinc-500 transition hover:text-orange-400">Refund Policy</a>
            <a href="/cancellation-policy" className="text-sm text-zinc-500 transition hover:text-orange-400">Cancellation Policy</a>
            <a href="/faq" className="text-sm text-zinc-500 transition hover:text-orange-400">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  )
}