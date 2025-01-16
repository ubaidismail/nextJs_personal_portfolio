import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Get the origin from the request headers
    const origin = request.headers.get('origin');
    
    // Define allowed origins
    const allowedOrigins = [
      'https://ubaidismail.com',
      'http://localhost:3000',
      'https://www.ubaidismail.com'
    ];

    // Check if the origin is allowed
    if (!allowedOrigins.includes(origin)) {
      return new NextResponse(
        JSON.stringify({ message: 'Unauthorized' }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const data = await request.json();
    const { userAgent, language, platform, timestamp, projectTitle, country, city, region, ip } = data;

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

    // Return response with CORS headers
    return new NextResponse(
      JSON.stringify({ message: 'Like notification sent successfully' }),
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Error sending like notification' }),
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS(request) {
  const origin = request.headers.get('origin');
  
  const allowedOrigins = [
    'https://ubaidismail.com',
    'http://localhost:3000',
    'https://www.ubaidismail.com'
  ];

  if (!allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 403,
    });
  }

  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400', // 24 hours cache for preflight requests
    },
  });
}
