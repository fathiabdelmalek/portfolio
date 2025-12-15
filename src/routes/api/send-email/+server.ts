import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const smtpConfig = {
  host: env.SMTP_HOST,
  port: parseInt(env.SMTP_PORT || '465'),
  secure: env.SMTP_SECURE === 'true',
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
};

console.log('SMTP Config:', {
  host: smtpConfig.host,
  port: smtpConfig.port,
  user: smtpConfig.auth.user,
  secure: smtpConfig.secure,
});

const transporter = nodemailer.createTransport(smtpConfig);

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Compose email
    const mailOptions = {
      from: env.SMTP_FROM || env.SMTP_USER,
      to: 'contact@imfathi.com',
      subject: `A message From ${name}`,
      text: `${message}\n\n---\nFrom: ${email}`,
      html: `
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><strong>From:</strong> ${email}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
};
