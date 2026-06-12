import HeroLeft from "./HeroLeft"
import HeroVisual from "./HeroVisual"
import HeroForm from "./HeroForm"

export default function Hero() {
  return (

    <section className="relative overflow-hidden bg-black px-3 pb-10 pt-6 md:px-6">

      {/* GLOW EFFECTS */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="float-glow absolute left-[-180px] top-[-100px] h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[140px]" />

        <div className="float-glow absolute right-[-220px] top-[60px] h-[460px] w-[460px] rounded-full bg-orange-500/10 blur-[160px]" />

      </div>

      {/* MAIN CONTAINER */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[34px]
          border
          border-white/10
          bg-[#050505]
          shadow-[0_0_120px_rgba(249,115,22,0.08)]
        "
      >

        {/* MOBILE + TABLET */}

        <div className="flex flex-col gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:hidden">

          {/* IMAGE */}

          <HeroVisual />

          {/* HERO CONTENT */}

          <HeroLeft />

          {/* FORM */}

          <HeroForm />

        </div>

        {/* DESKTOP */}

        <div
          className="
            hidden
            lg:grid
            lg:min-h-[760px]
            lg:grid-cols-[1fr_0.95fr]
            lg:items-center
            lg:gap-16
            lg:px-16
            lg:py-16
          "
        >

          {/* LEFT */}

          <HeroLeft />

          {/* RIGHT */}

          <div className="relative">

            {/* IMAGE */}

            <HeroVisual />

            {/* FLOATING FORM */}

            <div
              className="
                absolute
                bottom-6
                left-1/2
                z-20
                w-[88%]
                -translate-x-1/2
              "
            >

              <HeroForm />

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}