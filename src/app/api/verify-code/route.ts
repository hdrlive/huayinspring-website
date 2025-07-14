import { NextResponse } from "next/server";
import { verifyCode } from "@/lib/codestore";

export async function POST(req: Request) {
  const { email, code } = await req.json();
  const ok = verifyCode(email, code);
  return NextResponse.json({ success: ok });
}



