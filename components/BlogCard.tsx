import Link from "next/link";
import type { BlogPost } from "@prisma/client";

export default function BlogCard({ post }: { post: BlogPost }) {
  return <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1">
    {post.featuredImage && <img src={post.featuredImage} alt="" className="mb-5 h-44 w-full rounded-2xl object-cover" />}
    <p className="text-sm font-semibold uppercase tracking-wide text-gold">{post.category || "Insight"}</p>
    <h3 className="mt-2 text-xl font-bold text-midnight">{post.title}</h3>
    <p className="mt-3 line-clamp-3 text-slate-600">{post.excerpt}</p>
    <Link href={`/blog/${post.slug}`} className="mt-5 inline-block font-semibold text-navy">Read article →</Link>
  </article>;
}
