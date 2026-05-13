import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-8xl font-bold text-[#E94560]">404</p>
      <h1 className="text-3xl font-semibold">Lost in the creative void.</h1>
      <p className="text-zinc-400">The page you are looking for does not exist.</p>
      <Link href="/" className="rounded-full bg-gradient-to-r from-[#E94560] to-[#FF8C42] px-6 py-3 font-semibold">Back Home</Link>
    </section>
  );
}
