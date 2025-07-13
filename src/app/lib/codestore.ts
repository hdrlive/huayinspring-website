const codes = new Map<string, string>();

export function saveCode(email: string, code: string) {
  codes.set(email, code);
}

export function getCode(email: string): string | undefined {
  return codes.get(email);
}

