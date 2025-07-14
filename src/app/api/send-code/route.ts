import { NextResponse } from "next/server";
import { saveCode } from "@/lib/codestore";   // ← Alias wieder aktiv

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  saveCode(email, code);

  // TODO: Mailversand integrieren
  return NextResponse.json({ success: true });
}

