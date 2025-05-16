import nodemailer from 'nodemailer';

import { z } from 'zod';

const validZodSchema = z.object({
  email: z.string().email(),
  enterprise: z.string().trim(),
  content: z.string(),
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const POST = async (request: Request) => {
  const data = await request.json();

  try {
    validZodSchema.parse(data);
  } catch (error) {

    return Response.json(
      { errors: [error], message: 'Something went wrong' },
      { status: 400 }
    );
  }
 
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: 'posible cliente: ' + data.enterprise,
    text: data.content,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return Response.json({
      message: 'success',
      info,
    });
  } catch (error) {
    return Response.json(
      { errors: [error], message: 'Something went wrong' },
      { status: 500 }
    );
  }};
