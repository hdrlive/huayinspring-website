import { NextResponse } from 'next/server';
import { verifyCode } from '@/lib/codestore';

export async function POST(request: Request) {
  const { email, code } = await request.json();
  
  if (!email || !code) {
    return NextResponse.json(
      { error: "Email und Code sind erforderlich" },
      { status: 400 }
    );
  }

  try {
    const isValid = await verifyCode(email, code);
    
    return NextResponse.json(
      { success: isValid },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler bei der Verifikation:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}



