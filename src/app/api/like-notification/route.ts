import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const allowCors = (fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'OPTIONS') {
      return res.status(204).json({ message: 'OK' });
    }

    const data = await req.json();
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

    return res.status(201).json({ message: 'Like notification sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Error sending like notification' });
  }
};

export default allowCors(handler);