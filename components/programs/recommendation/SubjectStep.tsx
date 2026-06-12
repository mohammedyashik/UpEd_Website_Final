import StepHeader from "./StepHeader"

type Props = {
  selectedClass: string
  selectedSubjects: string[]
  setSelectedSubjects: (subjects: string[]) => void
  onNext: () => void
}

export default function SubjectStep({
  selectedClass,
  selectedSubjects,
  setSelectedSubjects,
  onNext,
}: Props) {

  let availableSubjects: string[] = []

  // Class 1-3

  if (
    ["Class 1", "Class 2", "Class 3"]
      .includes(selectedClass)
  ) {

    availableSubjects = [
      "Mathematics",
      "English",
      "EVS",
      "Tamil",
      "Hindi",
    ]

  }

  // Class 4-5

  else if (
    ["Class 4", "Class 5"]
      .includes(selectedClass)
  ) {

    availableSubjects = [
      "Mathematics",
      "English",
      "Science",
      "Tamil",
      "Hindi",
    ]

  }

  // Class 6-8

  else if (
    ["Class 6", "Class 7", "Class 8"]
      .includes(selectedClass)
  ) {

    availableSubjects = [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
      "Tamil",
      "Hindi",
    ]

  }

  // Class 9-10

  else if (
    ["Class 9", "Class 10"]
      .includes(selectedClass)
  ) {

    availableSubjects = [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
      "Tamil",
      "Hindi",
    ]

  }

  // Science Stream

  else if (
    ["Class 11 Science", "Class 12 Science"]
      .includes(selectedClass)
  ) {

    availableSubjects = [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "English",
    ]

  }

  // Commerce Stream

  else if (
    ["Class 11 Commerce", "Class 12 Commerce"]
      .includes(selectedClass)
  ) {

    availableSubjects = [
      "Accountancy",
      "Economics",
      "Business Studies",
      "English",
    ]

  }

  const toggleSubject = (
    subject: string
  ) => {

    if (
      selectedSubjects.includes(subject)
    ) {

      setSelectedSubjects(
        selectedSubjects.filter(
          item => item !== subject
        )
      )

      return
    }

    // Maximum 3 selections

    if (
      selectedSubjects.length >= 3
    ) {
      return
    }

    setSelectedSubjects([
      ...selectedSubjects,
      subject,
    ])

  }

  return (

    <div className="p-6 md:p-10">

      <StepHeader
        step="Step 3"
        title="Select Subjects Requiring Support"
        subtitle="Choose up to 3 subjects. We will automatically recommend the best UpEd program."
      />

      <div
        className="
          mt-10
          grid
          gap-5
          md:grid-cols-2
        "
      >

        {availableSubjects.map((subject) => (

          <button
            key={subject}
            onClick={() => toggleSubject(subject)}
            className={`
              rounded-[28px]
              border
              p-6
              text-left
              transition-all
              duration-300

              ${
                selectedSubjects.includes(subject)
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-white/10 bg-white/[0.03]"
              }
            `}
          >

            <h3
              className="
                text-xl
                font-bold
                text-white
              "
            >
              {subject}
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-zinc-400
              "
            >
              Personalized academic support available
            </p>

          </button>

        ))}

      </div>

      {selectedSubjects.length > 0 && (

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
            Selected Subjects
          </p>

          <h3
            className="
              mt-2
              text-xl
              font-black
              text-white
            "
          >
            {selectedSubjects.join(", ")}
          </h3>

        </div>

      )}

      <button
        onClick={onNext}
        disabled={selectedSubjects.length === 0}
        className="
          mt-10
          h-14
          w-full
          rounded-2xl
          bg-orange-500
          text-lg
          font-bold
          text-black
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        Continue →
      </button>

    </div>

  )

}