"use client"

import { motion } from "framer-motion"

const programs = [
  {
    title: "Foundation Builder",
    classes: "Classes 1 – 5",
    description:
      "Build strong academic fundamentals with personal attention and daily learning support.",
    highlight: "Core Subject Mastery",
  },
  {
    title: "Dual Subject Program",
    classes: "Classes 6 – 8",
    description:
      "Focused support for students needing improvement in two major subjects.",
    highlight: "Middle School Growth",
  },
  {
    title: "Board Success Program",
    classes: "Classes 9 – 10",
    description:
      "Strategic preparation for board exams with tests, revision plans, and mentorship.",
    highlight: "Board Exam Intensive",
  },
  {
    title: "PCM / PCB Excellence",
    classes: "Classes 11 – 12",
    description:
      "Advanced academic guidance for Science stream students aiming higher.",
    highlight: "Career-Focused Learning",
  },
]

export default function ProgramsSection() {
  return (
    <section className="relative overflow-hidden px-3 py-14 md:px-6 md:py-20">

      {/* BACKGROUND GLOW */}

      <div className="absolute left-[-120px] top-[10%] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute right-[-120px] bottom-[10%] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADING */}

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Programs Designed For Results
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">
            Academic Programs Built
            <br />
            Around Student Growth
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Personalized learning support for every academic stage —
            from foundation building to board exam excellence.
          </p>

        </div>

        {/* PROGRAM GRID */}

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {programs.map((program, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-[#0b0b0b]
                p-7
                transition-all
                duration-500
                hover:border-orange-500/30
                hover:bg-[#101010]
              "
            >

              {/* CARD GLOW */}

              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                <div className="absolute right-[-60px] top-[-60px] h-[180px] w-[180px] rounded-full bg-orange-500/10 blur-[80px]" />

              </div>

              <div className="relative z-10">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
                      {program.classes}
                    </p>

                    <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white">
                      {program.title}
                    </h3>

                  </div>

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-orange-500/20
                      bg-orange-500/10
                    "
                  >

                    <div className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.9)]" />

                  </div>

                </div>

                <p className="mt-6 text-base leading-8 text-zinc-400">
                  {program.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <div
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-orange-100
                    "
                  >
                    {program.highlight}
                  </div>

                  <button
                    className="
                      rounded-full
                      bg-orange-500
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-black
                      transition-all
                      duration-300
                      hover:scale-[1.03]
                      hover:bg-orange-400
                    "
                  >
                    Explore
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}