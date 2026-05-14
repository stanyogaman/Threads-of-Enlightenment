import Link from "next/link";
import type { Product } from "@prisma/client";

export default function ProductCard({ product }: { product: Product }) {
  return <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1">
    {product.imageUrl ? <img src={product.imageUrl} alt="" className="h-48 w-full object-cover" /> : <div className="h-48 bg-gradient-to-br from-navy to-gold" />}
    <div className="p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-gold">{product.productType}</p>
      <h3 className="mt-2 text-xl font-bold text-midnight">{product.title}</h3>
      <p className="mt-3 line-clamp-3 text-slate-600">{product.shortDescription}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="font-bold text-navy">${product.price.toString()}</span>
        <Link href={`/shop/${product.slug}`} className="rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white">View</Link>
      </div>
    </div>
  </article>;
}
