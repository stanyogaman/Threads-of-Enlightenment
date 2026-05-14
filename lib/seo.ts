import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function seo({ title, description, image, path = "" }: { title?: string | null; description?: string | null; image?: string | null; path?: string }): Metadata {
  const metaTitle = title || "Ken Primus — Threads of Enlightenment";
  const metaDescription = description || "Conversations that elevate humanity, deepen faith, and awaken purpose with Ken Primus.";
  const url = `${siteUrl}${path}`;
  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: { title: metaTitle, description: metaDescription, url, images: image ? [image] : [], type: "website" },
    twitter: { card: "summary_large_image", title: metaTitle, description: metaDescription, images: image ? [image] : [] },
    alternates: { canonical: url }
  };
}
