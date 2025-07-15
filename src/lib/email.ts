import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(to: string, code: string) {
  await resend.emails.send({
    from: 'Huayin Spring <noreply@huayin-spring.de>',
    to,
    subject: 'Ihr Bestätigungscode',
    html: `
      <h1>Huayin Spring Zugangscode</h1>
      <p>Verwenden Sie diesen Code zur Anmeldung:</p>
      <h2>${code}</h2>
      <p>Der Code ist 15 Minuten gültig.</p>
    `
  });
}