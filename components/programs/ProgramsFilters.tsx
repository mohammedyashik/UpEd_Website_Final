"use client"

import { useState } from "react"

const classFilters = [
  "All Programs",
  "Classes 1–5",
  "Classes 6–8",
  "Classes 9–10",
  "Classes 11–12",
]

const modeFilters = [
  "Online Tuition",
  "Home Tuition",
]

export default function ProgramsFilters() {

  const [activeClass, setActiveClass] = useState("All Programs")

  const [activeMode, setActiveMode] =
    useState("Online Tuition")

  return (

    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div
          className="
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-[#0b0b0b]
            p-6
            lg:p-8
          "
        >

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-orange-400
                "
              >
                Program Discovery
              </p>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  text-white
                  sm:text-4xl
                "
              >
                Find The Right Program
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-base
                  leading-[1.8]
                  text-zinc-400
                "
              >
                Filter programs based on class level and learning mode
                to discover the best academic structure for your child.
              </p>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col gap-6">

              {/* CLASS FILTERS */}

              <div>

                <p className="mb-3 text-sm font-medium text-zinc-500">
                  Academic Stage
                </p>

                <div className="flex flex-wrap gap-3">

                  {classFilters.map((filter) => (

                    <button
                      key={filter}
                      onClick={() => setActiveClass(filter)}
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
                          activeClass === filter
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

              {/* MODE FILTERS */}

              <div>

                <p className="mb-3 text-sm font-medium text-zinc-500">
                  Learning Mode
                </p>

                <div className="flex flex-wrap gap-3">

                  {modeFilters.map((filter) => (

                    <button
                      key={filter}
                      onClick={() => setActiveMode(filter)}
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
                          activeMode === filter
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

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}