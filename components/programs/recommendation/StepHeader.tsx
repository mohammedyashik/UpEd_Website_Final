type Props = {
  step: string
  title: string
  subtitle: string
}

export default function StepHeader({
  step,
  title,
  subtitle,
}: Props) {

  return (

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
        {step}
      </p>

      <h2
        className="
          mt-5
          text-4xl
          font-black
          leading-[1]
          tracking-[-0.05em]
          text-white
          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-5
          max-w-2xl
          text-base
          leading-[1.9]
          text-zinc-400
        "
      >
        {subtitle}
      </p>

    </div>

  )
}