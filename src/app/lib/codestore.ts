// src/app/lib/codeStore.ts

const codeStore = new Map<string, string>();

export function saveCode(email: string, code: string) {
  codeStore.set(email, code);
}

export function getCode(email: string): string | undefined {
  return codeStore.get(email);
}

export function deleteCode(email: string) {
  codeStore.delete(email);
}
