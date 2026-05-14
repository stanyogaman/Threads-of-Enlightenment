import { NextResponse } from "next/server"; import { login, setSession } from "@/lib/auth";
export async function POST(req:Request){const {email,password}=await req.json(); if(await login(email,password)){await setSession(email); return NextResponse.json({ok:true});} return NextResponse.json({ok:false},{status:401});}
