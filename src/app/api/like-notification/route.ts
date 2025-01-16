import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://www.ubaidismail.com',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Vary': 'Origin',
  'Access-Control-Allow-Credentials': 'true',
};

export async function POST(request: Request) {
  try {
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    const data = await request.json();
    const { userAgent, language, platform, timestamp, projectTitle, country, city, region, ip } = data;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify().catch((error) => {
      console.error('Transporter verification error:', error);
      throw error;
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ct.ubaidismail@gmail.com',
      subject: `New Portfolio Like: ${projectTitle}`,
      html: `
        <h2>New Like on Portfolio Project</h2>
        <p><strong>Project:</strong> ${projectTitle}</p>
        <p><strong>Time:</strong> ${timestamp}</p>
        <h3>User Information:</h3>
        <ul>
          <li><strong>Browser/Device:</strong> ${userAgent}</li>
          <li><strong>Language:</strong> ${language}</li>
          <li><strong>Platform:</strong> ${platform}</li>
          <li><strong>Country:</strong> ${country}</li>
          <li><strong>City:</strong> ${city}</li>
          <li><strong>Region:</strong> ${region}</li>
          <li><strong>IP:</strong> ${ip}</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions).catch((error) => {
      console.error('Error sending email:', error);
      throw error;
    });

    return NextResponse.json({ message: 'Like notification sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Error sending like notification' },
      { status: 500 }
    );
  }
}