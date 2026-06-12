import StepHeader from "./StepHeader"

type Props = {
  selectedMode: string
  setSelectedMode: (value: string) => void
  onNext: () => void
}

const modes = [

  {
    title: "Online Learning",
    subtitle: "Learn From Anywhere",
    description:
      "One-to-one live classes with expert mentors from the comfort of your home.",
    benefits: [
      "Flexible scheduling",
      "Recorded support materials",
      "Lower investment",
    ],
  },

  {
    title: "Home Tuition",
    subtitle: "Personal Mentor At Home",
    description:
      "Dedicated tutor visits your home for highly personalized academic support.",
    benefits: [
      "Face-to-face interaction",
      "Maximum engagement",
      "Higher accountability",
    ],
  },

]

export default function ModeStep({
  selectedMode,
  setSelectedMode,
  onNext,
}: Props) {

  return (

    <div className="p-6 md:p-10">

      <StepHeader
        step="Step 4"
        title="How Would You Like Classes To Be Conducted?"
        subtitle="Choose the learning format that best suits your child and family."
      />

      <div
        className="
          mt-10
          grid
          gap-5
          lg:grid-cols-2
        "
      >

        {modes.map((mode) => (

          <button
            key={mode.title}
            onClick={() =>
              setSelectedMode(mode.title)
            }
            className={`
              rounded-[32px]
              border
              p-8
              text-left
              transition-all
              duration-300

              ${
                selectedMode === mode.title
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-white/10 bg-white/[0.03]"
              }
            `}
          >

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-orange-300
              "
            >
              {mode.subtitle}
            </p>

            <h3
              className="
                mt-3
                text-3xl
                font-black
                text-white
              "
            >
              {mode.title}
            </h3>

            <p
              className="
                mt-4
                leading-relaxed
                text-zinc-400
              "
            >
              {mode.description}
            </p>

            <div className="mt-6 space-y-3">

              {mode.benefits.map((benefit) => (

                <p
                  key={benefit}
                  className="text-zinc-300"
                >
                  ✓ {benefit}
                </p>

              ))}

            </div>

          </button>

        ))}

      </div>

      {selectedMode && (

        <div
          className="
            mt-8
            rounded-[24px]
            border
            border-orange-500/20
            bg-orange-500/5
            p-5
          "
        >

          <p className="text-sm text-orange-300">
            Selected Learning Mode
          </p>

          <h3
            className="
              mt-2
              text-2xl
              font-black
              text-white
            "
          >
            {selectedMode}
          </h3>

        </div>

      )}

      <button
        onClick={onNext}
        disabled={!selectedMode}
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
          hover:scale-[1.01]
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        Get My Recommendation →
      </button>

    </div>

  )

}