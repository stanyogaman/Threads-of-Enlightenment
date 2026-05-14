import Link from "next/link";
import { db } from "@/lib/db";

export default async function Footer() {
  const settings = await db.siteSetting.findFirst().catch(() => null);
  const socials = [["YouTube", settings?.youtube], ["Instagram", settings?.instagram], ["Facebook", settings?.facebook], ["Spotify", settings?.spotify]].filter(([, url]) => url);
  return <footer className="bg-midnight text-white">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
      <div>
        <h2 className="text-xl font-bold">Threads of Enlightenment with Ken Primus</h2>
        <p className="mt-3 text-white/70">Conversations that elevate humanity, deepen faith, and awaken purpose.</p>
      </div>
      <div>
        <h3 className="font-semibold text-gold">Explore</h3>
        <div className="mt-3 grid gap-2 text-sm text-white/75">
          <Link href="/about">About Ken</Link><Link href="/podcast">Podcast</Link><Link href="/interview">Interview Experience</Link><Link href="/apply">Apply to Be Interviewed</Link>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gold">Connect</h3>
        <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/75">
          {socials.map(([name, url]) => <a key={name} href={url || "#"}>{name}</a>)}<Link href="/contact">Email</Link>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">© 2025 Ken Primus. All Rights Reserved. Privacy Policy | Terms of Use | Disclaimer</div>
  </footer>;
}
