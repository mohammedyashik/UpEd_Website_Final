"use client"

import ProgramCard from "@/components/home/programs/ProgramCard"
import { homePrograms } from "@/components/home/programs/program-data"

export default function ProgramsGrid() {
  return (

    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">

      {/* GLOW */}

      <div
        className="
          absolute
          left-[-120px]
          top-[10%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-orange-500/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          bottom-[10%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-orange-500/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADING */}

        <div className="max-w-3xl">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-orange-400
            "
          >
            Academic Programs
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
            Structured Learning
            <span className="block text-orange-500">
              For Every Student
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-[1.9]
              text-zinc-400
              md:text-lg
            "
          >
            Explore UpEd’s academic programs designed for different
            grades, learning goals, and performance levels.
          </p>

        </div>

        {/* GRID */}

        <div
          className="
            mt-14
            grid
            gap-8
            lg:grid-cols-2
          "
        >

          {homePrograms.map((program) => (

            <ProgramCard
              key={program.id}
              program={program}
            />

          ))}

        </div>

      </div>

    </section>

  )
}