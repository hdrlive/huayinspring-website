import { createClient } from 'redis';

const redis = createClient({
  url: process.env.REDIS_URL
});

redis.connect().catch(console.error);

export async function generateCode(email: string): Promise<string> {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  
  await redis.setEx(`code:${email}`, 900, code); // 15 Minuten Gültigkeit
  
  return code;
}

export async function verifyCode(email: string, code: string): Promise<boolean> {
  const storedCode = await redis.get(`code:${email}`);
  return storedCode === code;
}



