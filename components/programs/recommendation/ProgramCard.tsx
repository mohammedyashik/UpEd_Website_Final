type Props = {
  program: string

  hours: string
  weekly: string

  concept: number
  practice: number
  tests: number
}

export default function ProgramCard({
  program,
  hours,
  weekly,
  concept,
  practice,
  tests,
}: Props) {

  return (

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
        Recommended Program
      </div>

      <h2
        className="
          mt-5
          text-4xl
          font-black
          leading-tight
          text-white
        "
      >
        {program}
      </h2>

      <div
        className="
          mt-8
          grid
          gap-4
          md:grid-cols-2
        "
      >

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-black/30
            p-5
          "
        >

          <p className="text-sm text-zinc-500">
            Monthly Allocation
          </p>

          <h3
            className="
              mt-2
              text-2xl
              font-black
              text-white
            "
          >
            {hours}
          </h3>

        </div>

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-black/30
            p-5
          "
        >

          <p className="text-sm text-zinc-500">
            Weekly Schedule
          </p>

          <h3
            className="
              mt-2
              text-2xl
              font-black
              text-white
            "
          >
            {weekly}
          </h3>

        </div>

      </div>

      <div
        className="
          mt-8
          rounded-[28px]
          border
          border-white/10
          bg-black/30
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
          Monthly Delivery Framework
        </h3>

        <div className="mt-6 space-y-4">

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <span className="text-zinc-400">
              Concept Classes
            </span>

            <span
              className="
                font-bold
                text-white
              "
            >
              {concept}
            </span>
          </div>

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <span className="text-zinc-400">
              Guided Practice Sessions
            </span>

            <span
              className="
                font-bold
                text-white
              "
            >
              {practice}
            </span>
          </div>

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <span className="text-zinc-400">
              Test & Revision Blocks
            </span>

            <span
              className="
                font-bold
                text-white
              "
            >
              {tests}
            </span>
          </div>

        </div>

      </div>

      <div
        className="
          mt-8
          rounded-[28px]
          border
          border-green-500/20
          bg-green-500/5
          p-6
        "
      >

        <h4
          className="
            text-lg
            font-bold
            text-green-400
          "
        >
          Included In Every UpEd Program
        </h4>

        <div className="mt-4 space-y-3">

          <p className="text-zinc-300">
            ✓ One-to-One Personalized Learning
          </p>

          <p className="text-zinc-300">
            ✓ Weekly Academic Tracking
          </p>

          <p className="text-zinc-300">
            ✓ Monthly Progress Reports
          </p>

          <p className="text-zinc-300">
            ✓ Homework Support
          </p>

          <p className="text-zinc-300">
            ✓ Exam Preparation Guidance
          </p>

          <p className="text-zinc-300">
            ✓ Parent Mentor Reviews
          </p>

        </div>

      </div>

    </div>

  )

}