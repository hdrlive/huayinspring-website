import { NextResponse } from "next/server";
import { getCode } from '@/app/lib/codestore';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, code } = body;

  if (!email || !code) {
    return NextResponse.json(
      { success: false, message: "Ungültige Daten" },
      { status: 400 }
    );
  }

  const savedCode = getCode(email);

  if (savedCode === code) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, message: "Falscher Code" });
  }
}
