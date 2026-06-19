"use client"

export default function Journey() {
  const steps = [
    { step: "01", title: "Understand Your Child's Current Level", desc: "We coordinate a quiet, friendly concept benchmark check to see where school text patterns or basic operations are experiencing blockages.", img: "/images/how-it-works/student-assessment.jpg" },
    { step: "02", title: "Discuss Your Child's Academic Needs", desc: "Our advisor listens closely to isolate core worries—whether it is exam fear, short focus loops, or school classroom rushing habits.", img: "/images/how-it-works/parent-concern.jpg" },
    { step: "03", title: "Get Matched With the Right Tutor", desc: "We pull from our verified subject expert network to assign an ideal teacher whose personal patience clicks natively with your child's rhythm.", img: "/images/how-it-works/mentor-profile.jpg" },
    { step: "04", title: "Start Personalized One-to-One Classes", desc: "Classes initiate inside a cozy private learning layer. The tutor delivers full personal attention to ensure your child can ask doubts with zero hesitation.", img: "/images/how-it-works/student-mentor.jpg" },
    { step: "05", title: "Practice, Homework & Concept Reinforcement", desc: "Tutors back up regular textbook lessons and daily assignments, fixing repeating errors supportively without adding any test pressure.", img: "/images/how-it-works/guided-practice.jpg" },
    { step: "06", title: "Regular Parent Progress Updates", desc: "Total transparency regarding academic updates. You receive clear metric notifications showing precisely what lessons have been verified and secured.", img: "/images/how-it-works/parent-review.jpg" },
    { step: "07", title: "Continuous Academic Improvement", desc: "Continuous mapping dynamically aligns learning tracks with midterm school board cycles to guarantee a confident rise in school marks.", img: "/images/how-it-works/mentor-parent-review.jpg" }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent">
      <div className="max-w-2xl mb-16 text-left">
        <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">THE COMFORTABLE STEPS</p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">How We Build The Journey For Your Child</h2>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">We remove academic anxiety by laying a welcoming, step-by-step foundation of personal support and structural safety.</p>
      </div>

      <div className="space-y-24">
        {steps.map((block, i) => (
          <div key={i} className="grid gap-8 lg:grid-cols-12 items-center">
            <div className={`lg:col-span-5 space-y-3 text-left ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20 uppercase">
                Phase {block.step}
              </span>
              <h3 className="text-xl font-black text-white">{block.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">{block.desc}</p>
            </div>
            <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="rounded-2xl border border-white/10 overflow-hidden bg-zinc-950 aspect-[16/9] shadow-xl">
                <img 
                  src={block.img} 
                  alt={block.title} 
                  className="w-full h-full object-cover brightness-105 contrast-105 saturate-110" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}