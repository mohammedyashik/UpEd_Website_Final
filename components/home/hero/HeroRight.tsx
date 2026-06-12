export default function HeroRight() {
  return (

    <div
      className="
        rounded-[32px]
        border
        border-white/10
        bg-black/72
        p-5
        shadow-[0_0_80px_rgba(0,0,0,0.45)]
        backdrop-blur-3xl
        lg:p-7
      "
    >

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

        {/* LEFT */}

        <div className="max-w-[260px]">

          <p className="text-[11px] uppercase tracking-[0.35em] text-orange-400">
            Free Academic Consultation
          </p>

          <h3
            className="
              mt-3
              text-[34px]
              font-black
              leading-[0.92]
              tracking-[-0.05em]
              text-white
              lg:text-[44px]
            "
          >
            Want Better
            <br />
            Academic Results?
          </h3>

        </div>

        {/* FORM */}

        <div className="flex min-w-0 flex-1 flex-col gap-3 lg:max-w-[380px]">

          <input
            type="text"
            placeholder="Parent Name"
            className="
              h-[58px]
              rounded-[18px]
              border
              border-white/10
              bg-white/[0.05]
              px-5
              text-sm
              text-white
              outline-none
              placeholder:text-zinc-500
              focus:border-orange-500/40
            "
          />

          <input
            type="text"
            placeholder="Enter WhatsApp Number"
            className="
              h-[58px]
              rounded-[18px]
              border
              border-white/10
              bg-white/[0.05]
              px-5
              text-sm
              text-white
              outline-none
              placeholder:text-zinc-500
              focus:border-orange-500/40
            "
          />

          <button
            className="
              orange-glow
              h-[58px]
              rounded-[18px]
              bg-orange-500
              text-base
              font-bold
              text-black
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-orange-400
            "
          >
            Book Free Demo
          </button>

        </div>

      </div>

    </div>

  )
}