import Link from "next/link"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="px-4 py-32 text-center">
        <h1 className="text-8xl font-black text-orange-500">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-black text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-zinc-400">
          The page you are looking for does not exist.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-2xl bg-orange-500 px-6 py-3 font-bold text-black"
          >
            Home
          </Link>

          <Link
            href="/programs"
            className="rounded-2xl border border-white/10 px-6 py-3 font-bold text-white"
          >
            Programs
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}