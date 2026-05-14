import Link from "next/link";

export default function Hero() {
  return <section className="relative overflow-hidden bg-midnight text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,168,79,.28),transparent_35%),linear-gradient(135deg,#071a33,#0b2545)]" />
    <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 md:grid-cols-[1.1fr_.9fr] md:py-32">
      <div className="animate-[fadeUp_.7s_ease-out]">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[.25em] text-gold">Faith. Purpose. Transformation.</p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">Share Your Story. Inspire Humanity.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Join host, pastor, author, and global teacher Ken Primus as he interviews people who are serving humanity, transforming lives, and walking in purpose.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/apply" className="rounded-full bg-gold px-6 py-3 font-semibold text-midnight shadow-soft transition hover:bg-white">Apply to Be Interviewed</Link>
          <Link href="/podcast" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-gold hover:text-gold">Watch Latest Podcast Episode</Link>
        </div>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur">
        <p className="text-2xl font-semibold text-gold">Your story is your ministry.</p>
        <p className="mt-4 text-white/75">Every testimony carries light. Speak your truth — inspire the world.</p>
        <div className="mt-8 grid gap-3 text-sm">
          {["Real people. Real struggles. Real breakthroughs.", "Stories that strengthen faith, courage, and purpose.", "Conversations that remind us who we are created to be."].map((item) => <div key={item} className="rounded-2xl bg-white/10 p-4">{item}</div>)}
        </div>
      </div>
    </div>
  </section>;
}
