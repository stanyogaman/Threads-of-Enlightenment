import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { createHmac, timingSafeEqual } from "crypto";
import { db } from "@/lib/db";

const COOKIE = "toe_admin";
const maxAge = 60 * 60 * 24 * 7;

function secret() {
  return process.env.AUTH_SECRET || process.env.ADMIN_PASSWORD || "dev-secret-change-me";
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

export function createSessionToken(email: string) {
  const payload = Buffer.from(JSON.stringify({ email, exp: Math.floor(Date.now() / 1000) + maxAge })).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token?: string) {
  if (!token || !token.includes(".")) return null;
  const [payload, signature] = token.split(".");
  const expected = sign(payload);
  if (signature.length !== expected.length || !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  const data = JSON.parse(Buffer.from(payload, "base64url").toString()) as { email: string; exp: number };
  if (data.exp < Math.floor(Date.now() / 1000)) return null;
  return data.email;
}

export async function getAdminEmail() {
  const token = (await cookies()).get(COOKIE)?.value;
  return verifySessionToken(token);
}

export async function requireAdmin() {
  const email = await getAdminEmail();
  if (!email) redirect("/admin");
  return email;
}

export async function login(email: string, password: string) {
  const envEmail = process.env.ADMIN_EMAIL;
  const envPassword = process.env.ADMIN_PASSWORD;
  if (envEmail && envPassword && email === envEmail && password === envPassword) return true;
  const user = await db.user.findUnique({ where: { email } });
  return Boolean(user && (await bcrypt.compare(password, user.passwordHash)));
}

export async function setSession(email: string) {
  (await cookies()).set(COOKIE, createSessionToken(email), { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", maxAge, path: "/" });
}

export async function clearSession() {
  (await cookies()).delete(COOKIE);
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}
