"use client"

export default function ProgramsCTA() {
  return (

    <section className="relative overflow-hidden px-4 pb-24 pt-10 sm:px-6 lg:px-8">

      {/* GLOW */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-500/10
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        <div
          className="
            overflow-hidden
            rounded-[42px]
            border
            border-orange-500/10
            bg-[#0b0b0b]
            px-6
            py-16
            sm:px-10
            lg:px-16
            lg:py-24
          "
        >

          <div className="mx-auto max-w-4xl text-center">

            {/* TAG */}

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
              "
            >

              <p className="text-sm font-semibold text-orange-300">
                Parent Academic Guidance
              </p>

            </div>

            {/* HEADING */}

            <h2
              className="
                mt-7
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.06em]
                text-white
                sm:text-5xl
                lg:text-7xl
              "
            >
              Not Sure Which Program
              <span className="block text-orange-500">
                Fits Your Child?
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-lg
                leading-[1.9]
                text-zinc-400
                sm:text-xl
              "
            >
              Our academic advisors will analyze your child’s current
              learning stage, strengths, challenges, and goals to
              recommend the most effective learning structure.
            </p>

            {/* TRUST BOXES */}

            <div
              className="
                mt-12
                grid
                gap-5
                md:grid-cols-3
              "
            >

              {[
                {
                  title: "Personal Academic Analysis",
                  description:
                    "Understand learning gaps and performance improvement areas.",
                },
                {
                  title: "Mentor Matching System",
                  description:
                    "Get matched with the right academic mentor for your child.",
                },
                {
                  title: "Structured Success Plan",
                  description:
                    "Receive a roadmap for academic growth and consistency.",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    text-left
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

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-base
                      leading-[1.8]
                      text-zinc-400
                    "
                  >
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

            {/* CTA */}

            <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">

              <button
                className="
                  h-14
                  rounded-full
                  bg-orange-500
                  px-10
                  text-base
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:bg-orange-400
                "
              >
                Book Free Consultation
              </button>

              <button
                className="
                  h-14
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-10
                  text-base
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-orange-500/30
                  hover:bg-orange-500/10
                "
              >
                Talk To Academic Team
              </button>

            </div>

            {/* FOOT NOTE */}

            <p className="mt-8 text-sm text-zinc-500">
              No pressure. No spam. Personalized guidance from real academic experts.
            </p>

          </div>

        </div>

      </div>

    </section>

  )
}