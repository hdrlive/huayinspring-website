import { NextResponse } from "next/server";
import { getCode } from "../../../lib/codestore";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, code } = body;

  if (!email || !code) {
    return NextResponse.json({ success: false, message: "Fehlende Daten" }, { status: 400 });
  }

  const stored = getCode(email);
  const isValid = stored === code;

  return NextResponse.json({ success: isValid });
}
