import HeroForm from "./HeroForm"

export default function HeroVisual() {
  return (

    <div className="relative">

      {/* DESKTOP */}

      <div className="hidden lg:block">

        {/* IMAGE */}

        <div
          className="
            relative
            h-[720px]
            overflow-hidden
            rounded-[38px]
            border
            border-white/10
          "
        >

          <img
            src="/images/hero-student.png"
            alt="UpEd Student"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
            style={{
              objectPosition: "74% center"
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        </div>

      

      </div>

      {/* MOBILE + TABLET */}

      <div className="flex flex-col gap-5 lg:hidden">

        {/* IMAGE */}

        <div
          className="
            relative
            h-[320px]
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
          "
        >

          <img
            src="/images/hero-student.png"
            alt="UpEd Student"
            className="
              h-full
              w-full
              object-cover
            "
            style={{
              objectPosition: "center center"
            }}
          />

        </div>

        {/* FORM */}

        

      </div>

    </div>

  )
}