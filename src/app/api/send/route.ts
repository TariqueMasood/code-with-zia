import Email from '@/app/components/email-template/email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {name, email, message, mobileNumber} = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Code with Zia <onboarding@resend.dev>',
      to: "akramaltaf786@gmail.com",
      subject: `Contact Details - ${name}`,
      react: Email({ name, email, message, mobileNumber,  }), 
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
