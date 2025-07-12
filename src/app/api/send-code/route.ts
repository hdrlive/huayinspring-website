import { NextResponse } from "next/server";
import { saveCode } from "../../../lib/codestore";

function generateLuckyCode(): string {
  const goodDigits = ["1", "2", "3", "5", "6", "7", "8", "9"]; // ohne 4
  let code = "";
  while (code.length < 6) {
    const digit = goodDigits[Math.floor(Math.random() * goodDigits.length)];
    code += digit;
  }
  return code;
}

export async function POST(req: Request) {
  const body = await req.json();
  const email = body.email;

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { success: false, message: "Ungültige E-Mail" },
      { status: 400 }
    );
  }

  const code = generateLuckyCode();
  saveCode(email, code);

  console.log(`📧 Verifizierungscode für ${email}: ${code}`);

  return NextResponse.json({ success: true });
}
