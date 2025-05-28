import nodemailer from 'nodemailer';
import { z } from 'zod';
import { NextResponse } from 'next/server';

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
  console.log("Form data:", data);

  const result = validZodSchema.safeParse(data);
  if (!result.success) {
    console.error('Validation error:', result.error.flatten());
    return NextResponse.json(
      { errors: result.error.flatten(), message: 'Validation failed' },
      { status: 400 }
    );
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: data.email,
    subject: 'possible client: ' + data.enterprise,
    text: data.content,
    html: `<p>${data.content.replace(/\n/g, '<br>')}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: 'success',
      info,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { errors: [error], message: 'Something went wrong' },
      { status: 500 }
    );
  }
};
