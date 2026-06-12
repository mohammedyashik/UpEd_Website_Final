"use client"

import { motion } from "framer-motion"

const students = [
  {
    image: "/images/results/student-1.png",
    name: "Arjun",
    score: "+32%",
    label: "Mathematics Improvement",
  },
  {
    image: "/images/results/student-2.png",
    name: "Nivetha",
    score: "92%",
    label: "Consistency Score",
  },
  {
    image: "/images/results/student-3.png",
    name: "Rahul",
    score: "+18%",
    label: "Board Exam Growth",
  },
  {
    image: "/images/results/student-4.png",
    name: "Diya",
    score: "Top 5%",
    label: "Academic Rank",
  },
  {
    image: "/images/results/student-5.png",
    name: "Aditya",
    score: "87%",
    label: "Assignment Completion",
  },
]

export default function ResultsSection() {
  return (

    <section className="relative overflow-hidden px-3 py-16 md:px-6 md:py-24">

      {/* GLOW */}

      <div className="absolute left-[-120px] top-[10%] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="absolute right-[-120px] bottom-[10%] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Student Outcomes
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
            Real Students.
            <br />
            Real Academic
            <span className="block text-orange-500">
              Transformation.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-zinc-400
              md:text-lg
            "
          >
            UpEd focuses on measurable improvement through mentorship,
            discipline, structured learning systems, and continuous
            academic monitoring.
          </p>

        </div>

        {/* GRID */}

        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-5
          "
        >

          {students.map((student, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-white/10
                bg-[#0a0a0a]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-orange-500/30
                hover:shadow-[0_0_80px_rgba(249,115,22,0.12)]
              "
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                <img
                  src={student.image}
                  alt={student.name}
                  className="
                    h-[360px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              </div>

              {/* CONTENT */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5
                "
              >

                <div
                  className="
                    rounded-[24px]
                    border
                    border-white/10
                    bg-black/50
                    p-5
                    backdrop-blur-xl
                  "
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="text-lg font-bold text-white">
                        {student.name}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-400">
                        UpEd Student
                      </p>

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

                      <p className="text-sm font-bold text-orange-400">
                        {student.score}
                      </p>

                    </div>

                  </div>

                  <div
                    className="
                      mt-5
                      h-px
                      w-full
                      bg-white/10
                    "
                  />

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-zinc-300
                    "
                  >
                    {student.label}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}