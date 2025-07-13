import { NextResponse } from "next/server";
import { saveCode, getCode } from "../../../lib/codestore";

function generateCode(): string {
  return "123456"; // Platzhalter für echten Code
}

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json(
      { success: false, message: "E-Mail fehlt" },
      { status: 400 }
    );
  }

  const code = generateCode();
  saveCode(email, code);

  return NextResponse.json({ success: true, code });
}

