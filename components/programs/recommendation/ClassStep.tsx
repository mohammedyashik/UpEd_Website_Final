import StepHeader from "./StepHeader"

const classOptions = [

  { title: "Class 1" },
  { title: "Class 2" },
  { title: "Class 3" },

  { title: "Class 4" },
  { title: "Class 5" },

  { title: "Class 6" },
  { title: "Class 7" },
  { title: "Class 8" },

  { title: "Class 9" },
  { title: "Class 10" },

  { title: "Class 11 Science" },
  { title: "Class 11 Commerce" },

  { title: "Class 12 Science" },
  { title: "Class 12 Commerce" },

]

type Props = {
  selectedClass: string
  setSelectedClass: (value: string) => void
  onNext: () => void
}

export default function ClassStep({
  selectedClass,
  setSelectedClass,
  onNext,
}: Props) {

  return (

    <div className="p-6 md:p-10">

      <StepHeader
        step="Step 2"
        title="Which Class Is Your Child Studying In?"
        subtitle="Select your child's current class to discover the most suitable learning plan."
      />

      <div
        className="
          mt-10
          grid
          gap-4
          md:grid-cols-2
          lg:grid-cols-3
        "
      >

        {classOptions.map((item) => (

          <button
            key={item.title}
            onClick={() => setSelectedClass(item.title)}
            className={`
              rounded-[24px]
              border
              p-5
              text-left
              transition-all
              duration-300

              ${
                selectedClass === item.title
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-white/10 bg-white/[0.03]"
              }
            `}
          >

            <h3
              className="
                text-2xl
                font-black
                text-white
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-zinc-400
              "
            >
              Personalized academic support
            </p>

          </button>

        ))}

      </div>

      {selectedClass && (

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
            Selected Class
          </p>

          <h3
            className="
              mt-2
              text-2xl
              font-black
              text-white
            "
          >
            {selectedClass}
          </h3>

        </div>

      )}

      <button
        onClick={onNext}
        disabled={!selectedClass}
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
        Continue →
      </button>

    </div>

  )

}