import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, position, message } = await request.json();

    // Validate required fields
    if (!name || !email || !position || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // SMTP configuration
    const host = process.env.M365_SMTP_HOST || 'smtp.office365.com';
    const port = process.env.M365_SMTP_PORT ? parseInt(process.env.M365_SMTP_PORT) : 25; // Default to 25 for MX relay (Option B)
    const user = process.env.M365_SMTP_USER;
    const pass = process.env.M365_SMTP_PASS;
    const to = process.env.HR_EMAIL_RECIPIENT || 'hr@deltahealthcenter.org';

    // Manually resolve host to IPv4 to bypass any IPv6 connection attempt
    let resolvedHost = host;
    try {
      const dns = require('dns').promises;
      const addresses = await dns.resolve4(host);
      if (addresses && addresses.length > 0) {
        resolvedHost = addresses[0];
        console.log(`DNS Resolved ${host} to IPv4 address: ${resolvedHost}`);
      }
    } catch (dnsError) {
      console.warn(`DNS IPv4 resolution failed for ${host}, using raw host`, dnsError);
    }

    // Configure transporter options dynamically
    const transportConfig: any = {
      host: resolvedHost,
      port,
      secure: false, // false for 25/587 (uses STARTTLS if available)
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
        servername: host // Ensure TLS certificate SNI verification matches host name
      }
    };

    // Authenticate only if we have credentials and we aren't using Port 25 direct send
    if (user && pass && port !== 25) {
      transportConfig.auth = {
        user,
        pass,
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport(transportConfig);

    // Setup email data
    const mailOptions = {
      from: `"DHC Careers Portal" <${user || 'no-reply@deltahealthcenter.org'}>`,
      to,
      subject: `New Job Applicant Inquiry: ${position}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Position of Interest: ${position}

Message / Cover Letter:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px;">
          <h2 style="color: #007791; border-bottom: 2px solid #007791; padding-bottom: 10px;">New Job Applicant Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Applicant Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Position of Interest:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">${position}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #007791; border-radius: 4px;">
            <h4 style="margin-top: 0; color: #333;">Cover Letter / Message:</h4>
            <p style="white-space: pre-wrap; line-height: 1.5; color: #555; margin-bottom: 0;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
            This inquiry was submitted via the Delta Health Center Careers website form.
          </p>
        </div>
      `
    };

    // Send mail if configured, otherwise log it
    if (user && pass) {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } else {
      console.log('--- SIMULATED EMAIL SEND (No SMTP credentials configured in env) ---');
      console.log('To:', to);
      console.log('Subject:', mailOptions.subject);
      console.log('Body:', mailOptions.text);
      return NextResponse.json({ 
        success: true, 
        simulated: true, 
        message: 'SMTP credentials missing. Email logged to server console.' 
      });
    }
  } catch (error: any) {
    console.error('Error in careers contact route:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
