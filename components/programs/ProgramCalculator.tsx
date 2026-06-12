"use client"

import { useMemo, useState } from "react"

const classOptions = [
  "Classes 1–3",
  "Classes 4–5",
  "Classes 6–8",
  "Classes 9–10",
  "Classes 11–12 Science",
  "Classes 11–12 Commerce",
]

const subjectOptions = [
  "Core Academic Support",
  "Full School Support",
  "Foundation Builder Program",
  "Single Subject",
  "Dual Subject",
  "Full Academic Support",
  "Subject Intensive Program",
  "Board Success Program",
  "PCM Package",
  "PCB Package",
  "Commerce Success Program",
]

const modeOptions = [
  "Online Tuition",
  "Home Tuition",
]

const durationOptions = [
  "1 Month",
  "3 Months",
  "6 Months",
  "12 Months",
]

export default function ProgramCalculator() {

  const [selectedClass, setSelectedClass] =
    useState("Classes 6–8")

  const [selectedSubject, setSelectedSubject] =
    useState("Dual Subject")

  const [selectedMode, setSelectedMode] =
    useState("Home Tuition")

  const [selectedDuration, setSelectedDuration] =
    useState("6 Months")

  const result = useMemo(() => {

    const pricingMap: Record<string, any> = {

      /* =========================================
         CLASSES 1–3
      ========================================= */

      "Classes 1–3": {

        "Core Academic Support": {

          online: {
            "1 Month": "₹1,650",
            "3 Months": "₹4,500",
            "6 Months": "₹8,400",
            "12 Months": "₹15,600",
          },

          home: {
            "1 Month": "₹2,500",
            "3 Months": "₹6,900",
            "6 Months": "₹12,900",
            "12 Months": "₹24,000",
          },

          program: "Core Academic Support",
          tutor: "Primary Academic Mentor",
        },

        "Full School Support": {

          online: {
            "1 Month": "₹2,700",
            "3 Months": "₹7,500",
            "6 Months": "₹14,000",
            "12 Months": "₹27,000",
          },

          home: {
            "1 Month": "₹3,800",
            "3 Months": "₹10,500",
            "6 Months": "₹20,000",
            "12 Months": "₹38,000",
          },

          program: "Full School Support",
          tutor: "Primary School Mentor",
        },

      },

      /* =========================================
         CLASSES 4–5
      ========================================= */

      "Classes 4–5": {

        "Foundation Builder Program": {

          online: {
            "1 Month": "₹2,000",
            "3 Months": "₹5,500",
            "6 Months": "₹10,500",
            "12 Months": "₹19,000",
          },

          home: {
            "1 Month": "₹2,900",
            "3 Months": "₹8,000",
            "6 Months": "₹15,500",
            "12 Months": "₹29,000",
          },

          program: "Foundation Builder Program",
          tutor: "Foundation Academic Mentor",
        },

      },

      /* =========================================
         CLASSES 6–8
      ========================================= */

      "Classes 6–8": {

        "Single Subject": {

          online: {
            "1 Month": "₹2,200",
            "3 Months": "₹6,000",
            "6 Months": "₹11,500",
            "12 Months": "₹22,000",
          },

          home: {
            "1 Month": "₹3,300",
            "3 Months": "₹9,000",
            "6 Months": "₹17,000",
            "12 Months": "₹32,000",
          },

          program: "Single Subject Program",
          tutor: "Middle School Tutor",
        },

        "Dual Subject": {

          online: {
            "1 Month": "₹3,100",
            "3 Months": "₹8,500",
            "6 Months": "₹16,000",
            "12 Months": "₹30,000",
          },

          home: {
            "1 Month": "₹4,500",
            "3 Months": "₹12,500",
            "6 Months": "₹24,000",
            "12 Months": "₹46,000",
          },

          program: "Dual Subject Program",
          tutor: "Middle School STEM Tutor",
        },

        "Full Academic Support": {

          online: {
            "1 Month": "₹3,800",
            "3 Months": "₹10,500",
            "6 Months": "₹20,000",
            "12 Months": "₹38,000",
          },

          home: {
            "1 Month": "₹5,800",
            "3 Months": "₹16,000",
            "6 Months": "₹29,000",
            "12 Months": "₹56,000",
          },

          program: "Full Academic Support Program",
          tutor: "Academic Performance Mentor",
        },

      },

      /* =========================================
         CLASSES 9–10
      ========================================= */

      "Classes 9–10": {

        "Subject Intensive Program": {

          online: {
            "1 Month": "₹2,900",
            "3 Months": "₹8,000",
            "6 Months": "₹15,000",
            "12 Months": "₹28,000",
          },

          home: {
            "1 Month": "₹4,200",
            "3 Months": "₹11,500",
            "6 Months": "₹22,000",
            "12 Months": "₹42,000",
          },

          program: "Subject Intensive Program",
          tutor: "Board Exam Subject Mentor",
        },

        "Board Success Program": {

          online: {
            "1 Month": "₹4,300",
            "3 Months": "₹12,000",
            "6 Months": "₹22,000",
            "12 Months": "₹42,000",
          },

          home: {
            "1 Month": "₹6,500",
            "3 Months": "₹18,000",
            "6 Months": "₹34,000",
            "12 Months": "₹64,000",
          },

          program: "Board Success Program",
          tutor: "Board Exam Mentor",
        },

      },

      /* =========================================
         CLASSES 11–12 SCIENCE
      ========================================= */

      "Classes 11–12 Science": {

        "Single Subject": {

          online: {
            "1 Month": "₹3,600",
            "3 Months": "₹10,000",
            "6 Months": "₹19,000",
            "12 Months": "₹36,000",
          },

          home: {
            "1 Month": "₹5,000",
            "3 Months": "₹14,000",
            "6 Months": "₹27,000",
            "12 Months": "₹52,000",
          },

          program: "Single Subject Program",
          tutor: "Senior Subject Faculty",
        },

        "PCM Package": {

          online: {
            "1 Month": "₹6,500",
            "3 Months": "₹18,000",
            "6 Months": "₹35,000",
            "12 Months": "₹68,000",
          },

          home: {
            "1 Month": "₹10,000",
            "3 Months": "₹28,000",
            "6 Months": "₹52,000",
            "12 Months": "₹99,000",
          },

          program: "PCM Package",
          tutor: "Senior Science Faculty",
        },

        "PCB Package": {

          online: {
            "1 Month": "₹6,500",
            "3 Months": "₹18,000",
            "6 Months": "₹35,000",
            "12 Months": "₹68,000",
          },

          home: {
            "1 Month": "₹10,000",
            "3 Months": "₹28,000",
            "6 Months": "₹52,000",
            "12 Months": "₹99,000",
          },

          program: "PCB Package",
          tutor: "Senior Biology Faculty",
        },

      },

      /* =========================================
         CLASSES 11–12 COMMERCE
      ========================================= */

      "Classes 11–12 Commerce": {

        "Commerce Success Program": {

          online: {
            "1 Month": "₹5,400",
            "3 Months": "₹15,000",
            "6 Months": "₹28,000",
            "12 Months": "₹54,000",
          },

          home: {
            "1 Month": "₹8,600",
            "3 Months": "₹24,000",
            "6 Months": "₹45,000",
            "12 Months": "₹85,000",
          },

          program: "Commerce Success Program",
          tutor: "Commerce Stream Mentor",
        },

      },

    }

    const classData =
      pricingMap[selectedClass]?.[selectedSubject]

    if (!classData) {

      return {
        program: "Program Not Available",
        price: "Contact Us",
        tutor: "Academic Advisor",
        crm: "Custom_Lead",
      }

    }

    const modeKey =
      selectedMode === "Online Tuition"
        ? "online"
        : "home"

    return {

      program: classData.program,

      price: classData[modeKey][selectedDuration],

      tutor: classData.tutor,

      crm:
        `${selectedClass}_${selectedSubject}_${selectedMode}_${selectedDuration}`
          .replace(/\s+/g, "_")
          .replace(/–/g, "-"),

    }

  }, [
    selectedClass,
    selectedSubject,
    selectedMode,
    selectedDuration,
  ])

  return (

    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">

      <div
        className="
          absolute
          right-[-120px]
          top-[10%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-orange-500/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        <div
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-[#0b0b0b]
          "
        >

          <div className="grid lg:grid-cols-[1fr_0.95fr]">

            {/* LEFT */}

            <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-10">

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-orange-400
                "
              >
                Program Calculator
              </p>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-white
                  md:text-5xl
                "
              >
                Discover The Right
                <span className="block text-orange-500">
                  Learning Structure
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-[1.9]
                  text-zinc-400
                "
              >
                Select your child’s academic details and instantly
                receive the ideal UpEd program recommendation.
              </p>

              {/* FORM */}

              <div className="mt-10 grid gap-5">

                {/* CLASS */}

                <div>

                  <p className="mb-3 text-sm font-medium text-zinc-400">
                    Academic Stage
                  </p>

                  <select
                    value={selectedClass}
                    onChange={(e) =>
                      setSelectedClass(e.target.value)
                    }
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/40
                      px-5
                      text-white
                      outline-none
                    "
                  >

                    {classOptions.map((item) => (

                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>

                    ))}

                  </select>

                </div>

                {/* SUBJECT */}

                <div>

                  <p className="mb-3 text-sm font-medium text-zinc-400">
                    Program Type
                  </p>

                  <select
                    value={selectedSubject}
                    onChange={(e) =>
                      setSelectedSubject(e.target.value)
                    }
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/40
                      px-5
                      text-white
                      outline-none
                    "
                  >

                    {subjectOptions.map((item) => (

                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>

                    ))}

                  </select>

                </div>

                {/* MODE */}

                <div>

                  <p className="mb-3 text-sm font-medium text-zinc-400">
                    Learning Mode
                  </p>

                  <select
                    value={selectedMode}
                    onChange={(e) =>
                      setSelectedMode(e.target.value)
                    }
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/40
                      px-5
                      text-white
                      outline-none
                    "
                  >

                    {modeOptions.map((item) => (

                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>

                    ))}

                  </select>

                </div>

                {/* DURATION */}

                <div>

                  <p className="mb-3 text-sm font-medium text-zinc-400">
                    Duration
                  </p>

                  <select
                    value={selectedDuration}
                    onChange={(e) =>
                      setSelectedDuration(e.target.value)
                    }
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/40
                      px-5
                      text-white
                      outline-none
                    "
                  >

                    {durationOptions.map((item) => (

                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>

                    ))}

                  </select>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative p-6 lg:p-10">

              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-40
                  w-40
                  rounded-full
                  bg-orange-500/10
                  blur-[100px]
                "
              />

              <div className="relative">

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
                    Recommended Program
                  </p>

                </div>

                <h3
                  className="
                    mt-7
                    text-4xl
                    font-black
                    leading-[1]
                    tracking-[-0.05em]
                    text-white
                  "
                >
                  {result.program}
                </h3>

                <div
                  className="
                    mt-8
                    rounded-[30px]
                    border
                    border-orange-500/20
                    bg-orange-500/[0.06]
                    p-8
                  "
                >

                  <p className="text-sm text-orange-300">
                    Estimated Pricing
                  </p>

                  <h4
                    className="
                      mt-3
                      text-6xl
                      font-black
                      tracking-[-0.06em]
                      text-orange-400
                    "
                  >
                    {result.price}
                  </h4>

                </div>

                {/* DETAILS */}

                <div className="mt-8 grid gap-5">

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-5
                    "
                  >

                    <p className="text-sm text-zinc-500">
                      Tutor Type
                    </p>

                    <h5 className="mt-2 text-xl font-bold text-white">
                      {result.tutor}
                    </h5>

                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-5
                    "
                  >

                    <p className="text-sm text-zinc-500">
                      CRM Tag
                    </p>

                    <h5 className="mt-2 text-lg font-semibold break-all text-orange-400">
                      {result.crm}
                    </h5>

                  </div>

                </div>

                {/* CTA */}

                <button
                  className="
                    mt-10
                    h-14
                    w-full
                    rounded-2xl
                    bg-orange-500
                    text-lg
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:bg-orange-400
                  "
                >
                  Book Academic Consultation
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}