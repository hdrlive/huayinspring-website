const codeStore = new Map<string, string>();

export function generateCode(email: string): string {
  // Einen zufälligen 6-stelligen Code generieren:
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  codeStore.set(email, code);  // Code in der Map speichern
  return code;
}

export function saveCode(email: string, code: string): void {
  // Einen vorgegebenen Code manuell speichern/überschreiben
  codeStore.set(email, code);
}

export function verifyCode(email: string, code: string): boolean {
  // Prüfen, ob der Code zur E-Mail in der Map passt
  const storedCode = codeStore.get(email);
  return storedCode === code;
}



