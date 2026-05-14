export function mediaUrl(pathOrUrl?: string | null) {
  if (!pathOrUrl) return "";
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  const base = process.env.R2_PUBLIC_URL?.replace(/\/$/, "") ?? "";
  return `${base}/${pathOrUrl.replace(/^\//, "")}`;
}
