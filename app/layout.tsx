import type { Metadata } from "next";
import "./globals.css";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Ken Primus — Threads of Enlightenment",
  description: "Conversations that elevate humanity, deepen faith, and awaken purpose."
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await db.siteSetting.findFirst().catch(() => null);
  return <html lang="en">
    <head>
      {settings?.faviconUrl && <link rel="icon" href={settings.faviconUrl} />}
      {settings?.googleSearchConsole && <meta name="google-site-verification" content={settings.googleSearchConsole} />}
      {settings?.googleAnalytics && <script async src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalytics}`} />}
      {settings?.googleAnalytics && <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${settings.googleAnalytics}');` }} />}
    </head>
    <body>{children}</body>
  </html>;
}
