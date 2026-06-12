"use client"

export default function ProgramsHero() {
  return (

    <section className="relative overflow-hidden px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">

      {/* GLOW */}

      <div
        className="
          absolute
          left-[-140px]
          top-[-120px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-orange-500/10
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-[-180px]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-orange-500/10
          blur-[160px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-[#0b0b0b]
          px-6
          py-16
          sm:px-10
          lg:px-16
          lg:py-24
        "
      >

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">

          {/* LEFT */}

          <div>

            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-orange-500/20
                bg-orange-500/10
                px-5
                py-2
                text-sm
                font-medium
                text-orange-300
              "
            >
              CBSE Academic Programs • Classes 1–12
            </div>

            <h1
              className="
                mt-7
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.06em]
                text-white
                sm:text-6xl
                lg:text-8xl
              "
            >
              Programs Built
              <span className="block text-orange-500">
                For Every
              </span>
              Academic Stage.
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-[1.9]
                text-zinc-400
                sm:text-xl
              "
            >
              Personalized learning systems designed for modern students —
              from foundation building to board exam excellence and
              competitive academic preparation.
            </p>

            {/* QUICK STATS */}

            <div className="mt-10 flex flex-wrap gap-4">

              {[
                "5000+ Students",
                "Classes 1–12",
                "Online + Home Tuition",
                "Personal Mentorship",
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-zinc-300
                  "
                >
                  {item}
                </div>

              ))}

            </div>

            {/* BUTTONS */}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

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
                Explore Programs
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
                Talk To Academic Advisor
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            {/* MAIN PANEL */}

            <div
              className="
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-[#101010]
                p-6
              "
            >

              {/* TOP */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-zinc-500">
                    Program Coverage
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Academic Structure
                  </h3>

                </div>

                <div
                  className="
                    rounded-full
                    border
                    border-orange-500/20
                    bg-orange-500/10
                    px-4
                    py-2
                  "
                >

                  <p className="text-sm font-semibold text-orange-400">
                    Active
                  </p>

                </div>

              </div>

              {/* GRID */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {[
                  {
                    title: "Foundation",
                    subtitle: "Classes 1–5",
                  },
                  {
                    title: "Middle School",
                    subtitle: "Classes 6–8",
                  },
                  {
                    title: "Board Success",
                    subtitle: "Classes 9–10",
                  },
                  {
                    title: "Career Streams",
                    subtitle: "Classes 11–12",
                  },
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      rounded-[24px]
                      border
                      border-white/10
                      bg-black/40
                      p-5
                    "
                  >

                    <div
                      className="
                        h-3
                        w-3
                        rounded-full
                        bg-orange-500
                        shadow-[0_0_20px_rgba(249,115,22,0.9)]
                      "
                    />

                    <h4 className="mt-5 text-lg font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm text-zinc-400">
                      {item.subtitle}
                    </p>

                  </div>

                ))}

              </div>

              {/* BOTTOM */}

              <div
                className="
                  mt-6
                  rounded-[28px]
                  border
                  border-orange-500/10
                  bg-orange-500/[0.05]
                  p-6
                "
              >

                <p className="text-sm uppercase tracking-[0.2em] text-orange-300">
                  UpEd Advantage
                </p>

                <h4 className="mt-4 text-2xl font-bold text-white">
                  Structured Academic Ecosystem
                </h4>

                <p className="mt-4 text-base leading-[1.8] text-zinc-400">
                  Personalized mentorship, real-time progress monitoring,
                  academic discipline systems, and measurable performance
                  tracking designed for long-term student success.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}