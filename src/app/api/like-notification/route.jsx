import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { userAgent, language, platform, timestamp, projectTitle, country, city, region, ip } = data;

    // Create transporter with more detailed configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Test the connection
    await transporter.verify().catch(console.error);

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
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Like notification sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Error sending like notification' },
      { status: 500 }
    );
  }
}
