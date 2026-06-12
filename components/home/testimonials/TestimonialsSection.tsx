"use client"

const testimonials = [
  {
    name: "Priya Raman",
    role: "Parent of Class 5 Student",
    image: "/images/testimonials/family-success.jpg",
    quote:
      "UpEd completely changed the way our daughter studies. The mentor support, regular monitoring, and personal attention improved both her confidence and academic performance within months.",
  },
  {
    name: "Arjun K",
    role: "Class 8 Student",
    image: "/images/testimonials/home-tuition.jpg",
    quote:
      "Before UpEd, I struggled to stay consistent. My mentor helped me build discipline, improve marks, and actually enjoy learning again.",
  },
]

export default function TestimonialsSection() {
  return (

    <section className="relative overflow-hidden px-4 py-24 sm:px-6">

      <div className="mx-auto max-w-7xl">

        {/* HEADING */}

        <div className="max-w-3xl">

          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-orange-500/20
              bg-orange-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-orange-300
            "
          >
            Trusted By Parents & Students
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Real Academic
            <span className="block text-orange-500">
              Transformation Stories
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-[1.9]
              text-zinc-400
            "
          >
            Structured mentorship, consistent monitoring, and personal academic
            support helping students achieve measurable improvement.
          </p>

        </div>

        {/* TESTIMONIAL CARDS */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {testimonials.map((testimonial, index) => (

            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-[#0b0b0b]
                transition-all
                duration-500
                hover:border-orange-500/30
                hover:shadow-[0_0_80px_rgba(249,115,22,0.08)]
              "
            >

              {/* IMAGE */}

              <div className="relative h-[340px] overflow-hidden">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              </div>

              {/* CONTENT */}

              <div className="p-8">

                <div className="flex items-center gap-2">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <div
                      key={star}
                      className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-orange-500
                      "
                    />

                  ))}

                </div>

                <p
                  className="
                    mt-6
                    text-lg
                    leading-[1.9]
                    text-zinc-300
                  "
                >
                  “{testimonial.quote}”
                </p>

                <div className="mt-8">

                  <h3 className="text-xl font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-orange-400">
                    {testimonial.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}