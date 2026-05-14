import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  await requireAdmin();
  return NextResponse.json({ ok: true, message: "Manage this content from the custom admin panel." });
}
