type CodeEntry = {
  email: string;
  code: string;
  expires: number;
};

const codeStore = new Map<string, CodeEntry>();

export function generateCode(email: string): string {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  codeStore.set(email, {
    email,
    code,
    expires: Date.now() + 15 * 60 * 1000
  });
  return code;
}

export function verifyCode(email: string, code: string): boolean {
  const entry = codeStore.get(email);
  if (!entry) return false;

  const isValid = entry.code === code && Date.now() < entry.expires;
  if (!isValid) codeStore.delete(email);
  return isValid;
}


