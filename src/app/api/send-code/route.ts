import { NextResponse } from "next/server";
import { saveCode } from '@/app/lib/codestore';

function generateSecureCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Ungültige E-Mail-Adresse" },
        { status: 400 }
      );
    }

    const code = generateSecureCode();
    await saveCode(email, code);

    console.log(`Bestätigungscode für ${email}: ${code}`);
    
    return NextResponse.json({ 
      success: true,
      message: "Bestätigungscode wurde generiert"
    });

  } catch (error) {
    console.error("Fehler in /api/send-code:", error);
    return NextResponse.json(
      { success: false, message: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}