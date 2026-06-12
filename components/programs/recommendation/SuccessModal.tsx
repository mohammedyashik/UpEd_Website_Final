"use client"

type Props = {
  open: boolean
  onClose: () => void
}

export default function SuccessModal({
  open,
  onClose,
}: Props) {

  if (!open) return null

  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/80
        p-4
      "
    >

      <div
        className="
          w-full
          max-w-lg
          rounded-[36px]
          border
          border-orange-500/20
          bg-[#0b0b0b]
          p-8
        "
      >

        <div
          className="
            inline-flex
            rounded-full
            bg-green-500/10
            px-4
            py-2
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-green-400
          "
        >
          Enrollment Submitted
        </div>

        <h2
          className="
            mt-5
            text-4xl
            font-black
            text-white
          "
        >
          Thank You!
        </h2>

        <p
          className="
            mt-4
            leading-relaxed
            text-zinc-400
          "
        >
          Your academic assessment has been
          successfully submitted.
        </p>

        <div
          className="
            mt-6
            rounded-2xl
            bg-black/30
            p-5
          "
        >

          <p className="text-sm text-zinc-500">
            What Happens Next?
          </p>

          <div className="mt-4 space-y-3">

            <p className="text-zinc-300">
              ✓ Academic review by UpEd team
            </p>

            <p className="text-zinc-300">
              ✓ Tutor matching process
            </p>

            <p className="text-zinc-300">
              ✓ Personalized onboarding call
            </p>

            <p className="text-zinc-300">
              ✓ Class scheduling confirmation
            </p>

          </div>

        </div>

        <div
          className="
            mt-6
            rounded-2xl
            border
            border-orange-500/20
            bg-orange-500/5
            p-5
          "
        >

          <p className="text-sm text-orange-300">
            Expected Response Time
          </p>

          <h3
            className="
              mt-2
              text-2xl
              font-black
              text-white
            "
          >
            Within 30 Minutes
          </h3>

        </div>

        <button
          onClick={onClose}
          className="
            mt-8
            h-14
            w-full
            rounded-2xl
            bg-orange-500
            font-black
            text-black
          "
        >
          Continue →
        </button>

      </div>

    </div>

  )

}