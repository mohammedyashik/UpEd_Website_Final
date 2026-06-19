

"use client"

export default function ValueSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/5">
      <div className="bg-zinc-900/[0.08] rounded-3xl border border-white/10 p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <h3 className="text-2xl font-black text-white mb-3">
              Invest In Your Child's Future
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Strong academic foundations today create better opportunities tomorrow.
              Personalized one-to-one learning helps students build confidence,
              improve performance and achieve their full potential.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl border border-white/10 bg-black/30 text-center">
              <div className="text-orange-400 text-lg font-black">
                1-on-1
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Personalized Learning
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-white/10 bg-black/30 text-center">
              <div className="text-orange-400 text-lg font-black">
                Flexible
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Online & Home Tuition
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-white/10 bg-black/30 text-center">
              <div className="text-orange-400 text-lg font-black">
                Growth
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Continuous Progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}