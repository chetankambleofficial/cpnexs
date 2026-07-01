import nodemailer from "nodemailer";

let transporter = null;

export function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Test connection
    transporter.verify((error, success) => {
      if (error) {
        console.log("SMTP connection error:", error);
      } else {
        console.log("SMTP connection successful ✅");
      }
    });
  }
  return transporter;
}
