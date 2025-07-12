import { NextResponse } from "next/server";

const codes = new Map<string, string>(); // Temporäre Speicherung im RAM

export async function POST(req: Request) {
  const body = await req.json();
  const email = body.email;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ success: false, message: "Ungültige E-Mail" }, { status: 400 });
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  codes.set(email, code);

  console.log(`📧 Verifizierungscode für ${email}: ${code}`);

  return NextResponse.json({ success: true });
}

export function getCodeForEmail(email: string): string | undefined {
  return codes.get(email);
}

