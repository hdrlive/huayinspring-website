// src/app/api/send-code/route.ts
import { NextResponse } from "next/server";
import { saveCode } from "@/app/lib/codeStore";

// Liste chinesischer Glückszahlen
const luckyDigits = ["6", "8", "9"];

function generateLuckyCode(): string {
  let code = "";
  while (code.length < 6) {
    const digit = Math.floor(Math.random() * 10).toString();
    if (digit !== "4") {
      code += Math.random() < 0.4 ? luckyDigits[Math.floor(Math.random() * luckyDigits.length)] : digit;
    }
  }
  return code;
}

export async function POST(req: Request) {
  const body = await req.json();
  const email = body.email;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ success: false, message: "Ungültige E-Mail" }, { status: 400 });
  }

  const code = generateLuckyCode();
  saveCode(email, code);

  console.log(`📨 Code für ${email}: ${code}`);

  return NextResponse.json({ success: true });
}
