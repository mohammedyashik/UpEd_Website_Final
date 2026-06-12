"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const showcaseItems = [
  {
    title: "Parent Dashboard",
    description:
      "Parents can track attendance, assignment completion, subject performance, and academic consistency in real time.",
    image: "/images/programs/Parent-Dashboard.png", // 👈 Capital P and D
  },
  {
    title: "Assignment Tracking",
    description:
      "Structured assignment workflows ensure students stay disciplined, accountable, and academically active.",
    image: "/images/programs/Assignment-Tracking.png", // 👈 Capital A and T
  },
  {
    title: "Learning Journey",
    description:
      "Students follow milestone-based academic growth paths designed to improve confidence and consistency.",
    image: "/images/programs/Learning-Journey.png", // 👈 Capital L and J
  },
  {
    title: "Performance Analytics",
    description:
      "Advanced analytics help identify weak subjects, learning gaps, and improvement opportunities.",
    image: "/images/programs/Progress-Analytics.png", // 👈 Capital P and A
  },
  {
    title: "Live Tutoring Experience",
    description:
      "Interactive mentor sessions create premium one-to-one learning experiences for students.",
    image: "/images/programs/Tutor-Matching.png", // 👈 Capital T and M
  },
]

export default function WhyUpEd() {

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveIndex((prev) =>
        prev === showcaseItems.length - 1 ? 0 : prev + 1
      )

    }, 4500)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className="relative overflow-hidden px-3 py-16 md:px-6 md:py-24">

      {/* GLOW */}

      <div className="absolute left-[10%] top-[20%] h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute right-[0%] bottom-[0%] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* LEFT */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Why Parents Choose UpEd
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-6xl">
              Academic Support
              <br />
              Backed By
              <span className="block text-orange-500">
                Real Tracking.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
              UpEd combines mentorship, accountability,
              performance monitoring, and structured learning systems
              to create measurable academic growth.
            </p>

            {/* FEATURE LIST */}

            <div className="mt-10 flex flex-col gap-4">

              {[
                "Weekly Parent Reports",
                "Assignment Monitoring",
                "Live Performance Analytics",
                "Mentor Guided Learning",
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-4
                    backdrop-blur-xl
                  "
                >

                  <div className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.9)]" />

                  <p className="text-sm font-medium tracking-wide text-orange-100">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            {/* MAIN CARD */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-[#0b0b0b]
                p-3
                shadow-[0_0_120px_rgba(249,115,22,0.08)]
              "
            >

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >

                  <div className="overflow-hidden rounded-[28px]">

                    <img
                      src={showcaseItems[activeIndex].image}
                      alt={showcaseItems[activeIndex].title}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />

                  </div>

                </motion.div>

              </AnimatePresence>

              {/* BOTTOM CONTENT */}

              <div className="px-3 pb-3 pt-6">

                <h3 className="text-3xl font-black tracking-[-0.03em] text-white">
                  {showcaseItems[activeIndex].title}
                </h3>

                <p className="mt-4 text-base leading-8 text-zinc-400">
                  {showcaseItems[activeIndex].description}
                </p>

              </div>

            </div>

            {/* THUMBNAILS */}

            <div className="mt-5 flex flex-wrap gap-3">

              {showcaseItems.map((item, index) => (

                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "border-orange-500 scale-[1.03]"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }
                  `}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-[72px]
                      w-[110px]
                      object-cover
                    "
                  />

                </button>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}
