"use client"

import { ArrowRight, Check } from "lucide-react"

type ProgramCardProps = {
  program: {
    title: string
    description: string
    category: string
    subjects: string[]
    onlinePrice: string
    homePrice: string
    duration: string
    features: string[]
  }
}

export default function ProgramCard({
  program,
}: ProgramCardProps) {
  return (

    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-[#0a0a0a]
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-orange-500/30
        hover:shadow-[0_0_80px_rgba(249,115,22,0.14)]
      "
    >

      {/* GLOW */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_55%)]
        "
      />

      {/* CATEGORY */}

      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-orange-500/20
          bg-orange-500/10
          px-4
          py-2
          text-xs
          font-semibold
          tracking-[0.18em]
          text-orange-300
          uppercase
          backdrop-blur-xl
        "
      >
        {program.category}
      </div>

      {/* TITLE */}

      <h3
        className="
          mt-6
          text-3xl
          font-black
          leading-tight
          text-white
        "
      >
        {program.title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          mt-4
          text-base
          leading-[1.9]
          text-zinc-400
        "
      >
        {program.description}
      </p>

      {/* SUBJECTS */}

      <div className="mt-6 flex flex-wrap gap-3">

        {program.subjects.map((subject) => (

          <div
            key={subject}
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-sm
              font-medium
              text-zinc-200
            "
          >
            {subject}
          </div>

        ))}

      </div>

      {/* PRICING */}

      <div
        className="
          mt-8
          grid
          grid-cols-2
          gap-4
        "
      >

        <div
          className="
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.03]
            p-5
          "
        >

          <p className="text-sm text-zinc-400">
            Online
          </p>

          <h4
            className="
              mt-2
              text-3xl
              font-black
              text-white
            "
          >
            {program.onlinePrice}
          </h4>

        </div>

        <div
          className="
            rounded-[24px]
            border
            border-orange-500/20
            bg-orange-500/[0.08]
            p-5
          "
        >

          <p className="text-sm text-orange-200">
            Home Tuition
          </p>

          <h4
            className="
              mt-2
              text-3xl
              font-black
              text-orange-400
            "
          >
            {program.homePrice}
          </h4>

        </div>

      </div>

      {/* DURATION */}

      <div
        className="
          mt-5
          inline-flex
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          px-4
          py-2
          text-sm
          text-zinc-300
        "
      >
        {program.duration}
      </div>

      {/* FEATURES */}

      <div className="mt-8 space-y-4">

        {program.features.map((feature) => (

          <div
            key={feature}
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-orange-500/10
              "
            >

              <Check
                className="
                  h-4
                  w-4
                  text-orange-400
                "
              />

            </div>

            <p className="text-sm text-zinc-300">
              {feature}
            </p>

          </div>

        ))}

      </div>

      {/* BUTTONS */}

      <div
        className="
          mt-10
          flex
          flex-col
          gap-4
          sm:flex-row
        "
      >

        <button
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-full
            bg-orange-500
            px-6
            py-4
            text-sm
            font-bold
            text-black
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:bg-orange-400
          "
        >
          Explore Program

          <ArrowRight className="h-4 w-4" />
        </button>

        <button
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-6
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
          Book Demo
        </button>

      </div>

    </div>

  )
}