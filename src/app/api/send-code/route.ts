import { NextResponse } from 'next/server';
import { generateCode } from '@/lib/codestore';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  const { email } = await request.json();
  
  if (!email) {
    return NextResponse.json(
      { error: "Email ist erforderlich" },
      { status: 400 }
    );
  }

  try {
    const code = await generateCode(email);
    await sendEmail(email, code);
    
    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim Senden des Codes:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}

