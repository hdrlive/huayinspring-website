import { NextResponse } from "next/server";

const codes = new Map<string, string>(); // Temporäre Speicherung im RAM

// Funktion zur Generierung eines 6-stelligen Codes ohne "4"
// Glückszahlen (8, 6, 9) bevorzugt
function generateLuckyCode(): string {
  const luckyDigits = ['8','8','8','6','6','9','9','5','3','2','1','0']; // 8 häufig
  let code = '';
  while (code.length < 6) {
    const digit = luckyDigits[Math.floor(Math.random() * luckyDigits.length)];
    code += digit;
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
  codes.set(email, code);

  console.log(`🔐 Verifizierungscode für ${email}: ${code}`);

  return NextResponse.json({ success: true });
}
