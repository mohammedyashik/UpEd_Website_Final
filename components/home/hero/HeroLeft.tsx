"use client"

import { useRouter } from "next/navigation"

export default function HeroLeft() {
  const router = useRouter()
  const whatsappNumber = "919443594438"

  // Active WhatsApp Workspace Direct Redirect Router
  const handleTalkToMentorClick = () => {
    const defaultMessage = encodeURIComponent(
      "Hello UpEd! I am on your homepage and would like to talk to an academic mentor about setting up personalized support for my child."
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${defaultMessage}`, "_blank")
  }

  return (
    <div className="relative z-10 max-w-[680px]">
      {/* BADGE */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-orange-500/20
          bg-orange-500/10
          px-5
          py-2
          text-sm
          font-medium
          text-orange-200
          backdrop-blur-xl
        "
      >
        India’s Premium Academic Mentorship
      </div>

      {/* TITLE */}
      <h1
        className="
          mt-7
          text-[44px]
          sm:text-[68px]
          lg:text-[92px]
          font-black
          leading-[0.95]
          tracking-[-0.06em]
          text-white
        "
      >
        Your Child
        <span className="block text-orange-500">
          Deserves Better
        </span>
        Academic
        <br />
        Support.
      </h1>

      {/* DESCRIPTION */}
      <p
        className="
          mt-6
          max-w-[560px]
          text-base
          leading-[1.8]
          text-zinc-400
          lg:text-[21px]
        "
      >
        Structured mentorship, personal attention,
        academic discipline, and measurable progress
        designed for modern Indian students.
      </p>

      {/* CTA - NOW INSTANT AND PRE-FETCHED VIA ROUTER HOOKS */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          onClick={() => router.push("/programs")}
          className="
            orange-glow
            h-[58px]
            rounded-full
            bg-orange-500
            px-8
            text-base
            font-bold
            text-black
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:bg-orange-400
            active:scale-[0.98]
          "
        >
          Explore Programs
        </button>

        <button
          onClick={handleTalkToMentorClick}
          className="
            h-[58px]
            rounded-full
            border
            border-orange-500/20
            bg-orange-500/10
            px-8
            text-base
            font-semibold
            text-orange-100
            backdrop-blur-xl
            transition-all
            duration-300
            hover:bg-orange-500/20
            active:scale-[0.98]
          "
        >
          Talk To Mentor
        </button>
      </div>

      {/* FIXED SIDE-BY-SIDE STATS METRIC PANEL */}
      <div className="mt-10 flex flex-row items-center gap-3 w-full">
        {/* IMPROVEMENT CARD */}
        <div className="glass-card flex-1 min-w-0 rounded-[22px] p-4 md:p-5">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
            Improvement
          </p>
          <h3 className="mt-1 text-3xl md:text-5xl font-black text-white">
            +32%
          </h3>
          <p className="mt-1 text-[11px] md:text-sm text-zinc-400 whitespace-nowrap overflow-hidden text-ellipsis">
            Average Score Increase
          </p>
        </div>

        {/* SATISFACTION CARD */}
        <div className="glass-card flex-1 min-w-0 rounded-[22px] p-4 md:p-5">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
            Satisfaction
          </p>
          <h3 className="mt-1 text-3xl md:text-5xl font-black text-white">
            92%
          </h3>
          <p className="mt-1 text-[11px] md:text-sm text-zinc-400 whitespace-nowrap overflow-hidden text-ellipsis">
            Parent Satisfaction
          </p>
        </div>
      </div>
    </div>
  )
}