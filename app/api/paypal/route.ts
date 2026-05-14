import { NextResponse } from "next/server";
export async function POST(){ return NextResponse.json({ ok:false, message:"PayPal checkout is intentionally reserved for a later integration.", clientIdConfigured:Boolean(process.env.PAYPAL_CLIENT_ID) }, { status: 501 }); }
