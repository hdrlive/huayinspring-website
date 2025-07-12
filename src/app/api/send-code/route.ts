import { NextResponse } from "next/server";

// Temporäre Speicherung im RAM (wird bei jedem Server-Neustart zurückgesetzt!)
const codes = new Map<string, string>();

// Glückszahlen definieren (z. B. 6, 8, 9)
const preferredDigits = ["1", "2", "3", "5", "6", "7", "8", "9"]; // keine 4

function generateLuckyCode(): string {
  let result = "";
  for (let i = 0; i < 6; i++) {
    const digit = preferredDigits[Math.floor(Math.random() * preferredDigits.length)];
    result += digit;
  }
  return result;
}

export async function POST(req: Request) {
  const body = await req.json();
  const email = body.email;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ success: false, message: "Ungültige E-Mail" }, { status: 400 });
  }

  const code = generateLuckyCode();
  codes.set(email, code);
  console.log(`✅ Verifizierungscode für ${email}: ${code}`);

  return NextResponse.json({ success: true });
}

// Dieser Export darf NICHT hier stehen, sonst Build-Fehler!
// export function getCodeForEmail(email: string): string | undefined {
//   return codes.get(email);
// }
