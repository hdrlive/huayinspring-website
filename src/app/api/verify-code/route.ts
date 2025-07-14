import { NextResponse } from "next/server";
import { verifyCode } from "../../../lib/codestore";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, code } = body;

    if (!email || !code) {
      return NextResponse.json(
        { success: false, message: "Email oder Code fehlt" },
        { status: 400 }
      );
    }

    const isValid = await verifyCode(email, code);
    return NextResponse.json({ success: isValid });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Serverfehler" },
      { status: 500 }
    );
  }
}


