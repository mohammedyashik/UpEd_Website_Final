"use client"

type Props = {
  parentName: string
  selectedClass: string
  selectedSubjects: string[]
  selectedMode: string

  program: string

  selectedPlan: string

  amount: number
}

export default function EnrollmentSummary({
  parentName,
  selectedClass,
  selectedSubjects,
  selectedMode,
  program,
  selectedPlan,
  amount,
}: Props) {

  return (

    <section className="mt-12">

      <div
        className="
          rounded-[36px]
          border
          border-orange-500/20
          bg-orange-500/[0.05]
          p-8
        "
      >

        <div
          className="
            inline-flex
            rounded-full
            bg-orange-500/10
            px-4
            py-2
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-orange-300
          "
        >
          Enrollment Summary
        </div>

        <h2
          className="
            mt-5
            text-4xl
            font-black
            text-white
          "
        >
          Ready To Reserve A Seat?
        </h2>

        <p
          className="
            mt-3
            text-zinc-400
          "
        >
          Review your child's personalized learning plan.
        </p>

        <div
          className="
            mt-8
            grid
            gap-5
            md:grid-cols-2
          "
        >

          <div className="rounded-2xl bg-black/30 p-5">

            <p className="text-sm text-zinc-500">
              Parent Name
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              {parentName}
            </h3>

          </div>

          <div className="rounded-2xl bg-black/30 p-5">

            <p className="text-sm text-zinc-500">
              Academic Stage
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              {selectedClass}
            </h3>

          </div>

          <div className="rounded-2xl bg-black/30 p-5">

            <p className="text-sm text-zinc-500">
              Learning Mode
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              {selectedMode}
            </h3>

          </div>

          <div className="rounded-2xl bg-black/30 p-5">

            <p className="text-sm text-zinc-500">
              Program
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              {program}
            </h3>

          </div>

        </div>

        <div
          className="
            mt-5
            rounded-2xl
            bg-black/30
            p-5
          "
        >

          <p className="text-sm text-zinc-500">
            Selected Subjects
          </p>

          <h3 className="mt-2 text-lg text-white">
            {selectedSubjects.join(", ")}
          </h3>

        </div>

        <div
          className="
            mt-5
            rounded-2xl
            border
            border-green-500/20
            bg-green-500/5
            p-6
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <div>

              <p className="text-sm text-zinc-500">
                Selected Plan
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-black
                  text-white
                "
              >
                {selectedPlan || "Choose A Plan"}
              </h3>

            </div>

            <div className="text-right">

              <p className="text-sm text-zinc-500">
                Investment
              </p>

              <h3
                className="
                  mt-2
                  text-4xl
                  font-black
                  text-green-400
                "
              >
                ₹{amount.toLocaleString()}
              </h3>

            </div>

          </div>

        </div>

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-white/10
            p-6
          "
        >

          <h3
            className="
              text-xl
              font-black
              text-white
            "
          >
            Why Parents Choose UpEd
          </h3>

          <div className="mt-5 space-y-3">

            <p className="text-zinc-300">
              ✓ One-to-One Personalized Learning
            </p>

            <p className="text-zinc-300">
              ✓ Monthly Progress Tracking
            </p>

            <p className="text-zinc-300">
              ✓ Dedicated Academic Mentor
            </p>

            <p className="text-zinc-300">
              ✓ Structured Testing Framework
            </p>

            <p className="text-zinc-300">
              ✓ Parent Review Sessions
            </p>

            <p className="text-zinc-300">
              ✓ Exam Preparation Guidance
            </p>

          </div>

        </div>

        <button
          disabled={!selectedPlan}
          className="
            mt-8
            h-16
            w-full
            rounded-2xl
            bg-orange-500
            text-lg
            font-black
            text-black
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Reserve My Child's Seat →
        </button>

      </div>

    </section>

  )

}