import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import ProductCard from "@/components/ProductCard";
import { db } from "@/lib/db";
import { homeSeo, packages, testimonials } from "@/lib/content";
import { seo } from "@/lib/seo";
import Link from "next/link";

export const metadata = seo(homeSeo);

export default async function Home() {
  const [posts, products, episodes] = await Promise.all([
    db.blogPost.findMany({ where: { published: true }, orderBy: { createdAt: "desc" }, take: 3 }).catch(() => []),
    db.product.findMany({ where: { published: true }, take: 3 }).catch(() => []),
    db.podcastEpisode.findMany({ where: { published: true }, orderBy: { createdAt: "desc" }, take: 3 }).catch(() => [])
  ]);
  const displayProducts = products.length ? products : packages.map((p) => ({ ...p, id: p.slug, price: { toString: () => p.price }, imageUrl: null } as any));
  return <main>
    <Hero />
    <section className="bg-white py-20"><div className="mx-auto max-w-5xl px-4 text-center"><p className="text-sm font-bold uppercase tracking-[.2em] text-gold">Our Mission</p><h2 className="mt-3 text-3xl font-bold text-midnight md:text-4xl">Every human being carries a story.</h2><p className="mt-5 text-lg leading-8 text-slate-600">We believe every human being carries a story — one that can heal, uplift, and awaken others. This platform exists to give those stories a voice, a stage, and a spiritual home.</p></div></section>
    <section className="py-20"><div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2"><div><p className="text-gold font-bold uppercase tracking-wide">About Ken Primus</p><h2 className="mt-3 text-3xl font-bold text-midnight">A global teacher of faith, healing, and purpose.</h2><p className="mt-5 leading-8 text-slate-700">Born in British Guyana and raised in the United States, Ken Primus has spent his life teaching the principles of God, human development, emotional healing, and purposeful living.</p><Link href="/about" className="mt-6 inline-block rounded-full bg-midnight px-5 py-3 font-semibold text-white">Meet Ken</Link></div><div className="rounded-3xl bg-white p-8 shadow-soft"><h3 className="text-2xl font-bold text-midnight">Why Be Interviewed?</h3><ul className="mt-5 grid gap-3 text-slate-700">{["Share your mission with a global, faith-aligned audience", "Give hope and guidance to others", "Promote your book, business, or movement", "Leave a legacy that outlives you", "Be seen, heard, and understood", "Join a community of purpose-driven leaders"].map(x => <li key={x}>✓ {x}</li>)}</ul><Link href="/apply" className="mt-6 inline-block font-bold text-navy">Apply to Be a Guest →</Link></div></div></section>
    <section className="bg-midnight py-20 text-white"><div className="mx-auto max-w-7xl px-4"><div className="flex items-end justify-between gap-4"><div><p className="text-gold font-bold uppercase tracking-wide">Featured Episodes</p><h2 className="mt-3 text-3xl font-bold">Real people. Real struggles. Real breakthroughs.</h2></div><Link href="/podcast" className="hidden rounded-full border border-white/30 px-5 py-3 md:block">Watch the Podcast</Link></div><div className="mt-8 grid gap-6 md:grid-cols-3">{(episodes.length ? episodes : [1,2,3]).map((ep: any, i) => <div key={ep.id || i} className="rounded-3xl bg-white/10 p-5"><div className="aspect-video rounded-2xl bg-white/10" /> <h3 className="mt-4 font-bold">{ep.title || `Episode Placeholder ${i+1}`}</h3><p className="mt-2 text-sm text-white/70">Stories that strengthen faith, courage, and purpose.</p></div>)}</div></div></section>
    <section className="py-20"><div className="mx-auto max-w-7xl px-4"><h2 className="text-3xl font-bold text-midnight">Interview Packages</h2><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{displayProducts.map((product: any) => <ProductCard key={product.slug} product={product} />)}</div></div></section>
    <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4"><h2 className="text-3xl font-bold text-midnight">Articles & Insights</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{posts.length ? posts.map((post) => <BlogCard key={post.id} post={post} />) : ["Faith as a Living Blueprint", "The Power of Testimony", "Serving Humanity with Purpose"].map(title => <div className="rounded-3xl border p-6" key={title}><h3 className="text-xl font-bold text-midnight">{title}</h3><p className="mt-3 text-slate-600">Coming soon from Ken Primus and Threads of Enlightenment.</p></div>)}</div></div></section>
    <section className="py-20"><div className="mx-auto max-w-7xl px-4"><h2 className="text-3xl font-bold text-midnight">What Guests Say</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{testimonials.slice(0,3).map(t => <blockquote className="rounded-3xl bg-white p-6 shadow-soft" key={t}>“{t}”</blockquote>)}</div></div></section>
    <section className="bg-gold py-16 text-midnight"><div className="mx-auto max-w-4xl px-4 text-center"><h2 className="text-4xl font-bold">Your voice matters. Your story has power. The world is waiting.</h2><Link href="/apply" className="mt-8 inline-block rounded-full bg-midnight px-7 py-3 font-bold text-white">Apply to Be Interviewed</Link></div></section>
  </main>;
}
