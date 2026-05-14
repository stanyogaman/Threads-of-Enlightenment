import Link from "next/link";
import { clearSession, requireAdmin } from "@/lib/auth";

const nav = [["Dashboard", "/admin"], ["Pages", "/admin/pages"], ["Homepage Sections", "/admin/sections"], ["Blog", "/admin/blog"], ["Products", "/admin/products"], ["Podcast", "/admin/podcast"], ["Applications", "/admin/applications"], ["Quiz", "/admin/quiz"], ["Settings", "/admin/settings"], ["SEO", "/admin/seo"]];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const email = await requireAdmin();
  async function logout() { "use server"; await clearSession(); }
  return <div className="min-h-screen bg-slate-100">
    <aside className="fixed inset-y-0 left-0 hidden w-64 bg-midnight p-5 text-white lg:block">
      <h1 className="text-xl font-bold text-gold">Admin CMS</h1><p className="mt-1 text-xs text-white/60">{email}</p>
      <nav className="mt-8 grid gap-2 text-sm">{nav.map(([label, href]) => <Link className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-gold" key={href} href={href}>{label}</Link>)}</nav>
      <form action={logout} className="mt-8"><button className="rounded-xl bg-white/10 px-3 py-2 text-sm">Sign out</button></form>
    </aside>
    <main className="lg:pl-64"><div className="mx-auto max-w-6xl p-4 py-8 lg:p-10">{children}</div></main>
  </div>;
}
