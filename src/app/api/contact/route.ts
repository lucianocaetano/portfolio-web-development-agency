import nodemailer from 'nodemailer';
import { z } from 'zod';

const validZodSchema = z.object({
  email: z.string().email(),
  enterprise: z.string().trim(),
  content: z.string(),
});

const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const POST = async (request: Request) => {
  const data = await request.json();

  const result = validZodSchema.safeParse(data);
  if (!result.success) {
    console.error('Validation error:', result.error.flatten());
    return Response.json(
      { errors: result.error.flatten(), message: 'Validation failed' },
      { status: 400 }
    );
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: data.email,
    subject: 'possible client: ' + data.enterprise,
    text: "We have been contacted from: " + data.email + " || " + data.content,
    html: `<p>We have been contacted from: ${data.email}<br><br>${data.content.replace(/\n/g, '<br>')}</p>`,
};

  try {
    const info = await transporter.sendMail(mailOptions);
    return Response.json({
      message: 'success',
      info,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { errors: [error], message: 'Something went wrong' },
      { status: 500 }
    );
  }
};
