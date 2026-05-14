import Link from "next/link";
import { db } from "@/lib/db";

const links = [
  ["Home", "/"], ["About Ken", "/about"], ["Podcast", "/podcast"], ["Interview Experience", "/interview"], ["Apply", "/apply"], ["Testimonials", "/testimonials"], ["Articles", "/blog"], ["Shop", "/shop"], ["Contact", "/contact"]
];

export default async function Header() {
  const settings = await db.siteSetting.findFirst().catch(() => null);
  return <header className="sticky top-0 z-40 border-b border-white/10 bg-midnight/95 text-white backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <Link href="/" className="flex items-center gap-3 font-serif text-lg font-bold tracking-wide">
        {settings?.logoUrl ? <img src={settings.logoUrl} alt="Logo" className="h-9 w-9 rounded-full object-cover" /> : <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-midnight">K</span>}
        <span>{settings?.siteName || "Threads of Enlightenment"}</span>
      </Link>
      <nav className="hidden items-center gap-5 text-sm lg:flex">
        {links.map(([label, href]) => <Link key={href} href={href} className="text-white/80 transition hover:text-gold">{label}</Link>)}
      </nav>
      <Link href="/apply" className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-midnight shadow-soft transition hover:bg-white">Apply</Link>
    </div>
  </header>;
}
