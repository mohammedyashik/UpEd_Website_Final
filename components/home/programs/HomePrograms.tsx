"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import ProgramCard from "./ProgramCard"
import { homePrograms } from "./program-data"

const filters = [
  "All",
  "Classes 1–5",
  "Classes 6–8",
  "Classes 9–10",
  "Classes 11–12",
]

export default function HomePrograms() {

  const [activeFilter, setActiveFilter] = useState("All")

  const filteredPrograms =
    activeFilter === "All"
      ? homePrograms
      : homePrograms.filter(
          (program) => program.category === activeFilter
        )

  return (

    <section className="relative overflow-hidden px-3 py-16 md:px-6 md:py-24">

      {/* GLOW */}

      <div className="absolute left-[-120px] top-[10%] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute right-[-120px] bottom-[10%] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* TOP */}

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Programs Designed For Every Academic Stage
            </p>

            <h2
              className="
                mt-5
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-white
                md:text-6xl
              "
            >
              Premium Academic
              <br />
              Programs That
              <span className="block text-orange-500">
                Actually Deliver Results.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-zinc-400
                md:text-lg
              "
            >
              Structured learning systems, mentor support,
              progress tracking, and personalized academic guidance
              for students from Classes 1 to 12.
            </p>

          </div>

          {/* FILTERS */}

          <div className="flex flex-wrap gap-3">

            {filters.map((filter) => (

              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  rounded-full
                  border
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    activeFilter === filter
                      ? "border-orange-500 bg-orange-500 text-black"
                      : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-orange-500/30 hover:bg-orange-500/10"
                  }
                `}
              >
                {filter}
              </button>

            ))}

          </div>

        </div>

        {/* GRID */}

        <motion.div
          layout
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-2
          "
        >

          {filteredPrograms.map((program) => (

            <ProgramCard
              key={program.id}
              program={program}
            />

          ))}

        </motion.div>

        {/* BOTTOM CTA */}

        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-center
            rounded-[36px]
            border
            border-white/10
            bg-[#0b0b0b]
            px-6
            py-12
            text-center
          "
        >

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Need Help Choosing?
          </p>

          <h3
            className="
              mt-5
              max-w-3xl
              text-3xl
              font-black
              leading-tight
              tracking-[-0.04em]
              text-white
              md:text-5xl
            "
          >
            We Help Parents Find The Right Academic Program.
          </h3>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-zinc-400
            "
          >
            Talk with our academic team and get personalized
            program recommendations based on your child’s class,
            subjects, goals, and learning needs.
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >

            <button
              className="
                rounded-full
                bg-orange-500
                px-8
                py-4
                text-sm
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-orange-400
              "
            >
              Talk To Academic Advisor
            </button>

            <button
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-orange-500/30
                hover:bg-orange-500/10
              "
            >
              Explore All Programs
            </button>

          </div>

        </div>

      </div>

    </section>

  )
}