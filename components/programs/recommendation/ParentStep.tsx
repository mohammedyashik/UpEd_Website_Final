import StepHeader from "./StepHeader"

type Props = {
  parentName: string
  setParentName: (value: string) => void

  whatsapp: string
  setWhatsapp: (value: string) => void

  onNext: () => void
}

export default function ParentStep({
  parentName,
  setParentName,
  whatsapp,
  setWhatsapp,
  onNext,
}: Props) {

  const canContinue =
    parentName.trim() !== "" &&
    whatsapp.trim().length >= 10

  return (

    <div className="p-6 md:p-10">

      <StepHeader
        step="Step 1"
        title="Get Your Child's Personalized Academic Success Plan"
        subtitle="Answer a few quick questions and discover the best UpEd learning program with pricing and academic roadmap."
      />

      <div
        className="
          mt-8
          rounded-[28px]
          border
          border-green-500/20
          bg-green-500/[0.05]
          p-6
        "
      >

        <h3
          className="
            text-xl
            font-black
            text-green-400
          "
        >
          What You'll Receive
        </h3>

        <div className="mt-4 space-y-3">

          <p className="text-zinc-300">
            ✓ Personalized Program Recommendation
          </p>

          <p className="text-zinc-300">
            ✓ Exact Fee Structure
          </p>

          <p className="text-zinc-300">
            ✓ Monthly Learning Plan
          </p>

          <p className="text-zinc-300">
            ✓ Mentor Allocation Guidance
          </p>

        </div>

      </div>

      <div className="mt-10 grid gap-5">

        <div>

          <label
            className="
              mb-2
              block
              text-sm
              font-semibold
              text-zinc-400
            "
          >
            Parent Name
          </label>

          <input
            value={parentName}
            onChange={(e) =>
              setParentName(e.target.value)
            }
            placeholder="Enter Parent Name"
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-white/10
              bg-black/30
              px-5
              text-white
              outline-none
            "
          />

        </div>

        <div>

          <label
            className="
              mb-2
              block
              text-sm
              font-semibold
              text-zinc-400
            "
          >
            WhatsApp Number
          </label>

          <input
            value={whatsapp}
            onChange={(e) =>
              setWhatsapp(e.target.value)
            }
            placeholder="Enter WhatsApp Number"
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-white/10
              bg-black/30
              px-5
              text-white
              outline-none
            "
          />

        </div>

      </div>

      <div
        className="
          mt-8
          rounded-[24px]
          border
          border-orange-500/20
          bg-orange-500/[0.05]
          p-5
        "
      >

        <p className="text-orange-300 text-sm">
          Assessment Time
        </p>

        <h3
          className="
            mt-2
            text-2xl
            font-black
            text-white
          "
        >
          Less Than 2 Minutes
        </h3>

      </div>

      <button
        onClick={onNext}
        disabled={!canContinue}
        className="
          mt-10
          h-14
          w-full
          rounded-2xl
          bg-orange-500
          text-lg
          font-bold
          text-black
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
      >
        Start Assessment →
      </button>

    </div>

  )

}