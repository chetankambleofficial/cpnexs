import nodemailer from "nodemailer";

export function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  console.log("[SMTP] HOST:", host, "PORT:", port, "USER:", user ? "SET" : "MISSING", "PASS:", pass ? "SET" : "MISSING");

  if (!host || !user || !pass) {
    throw new Error(
      `SMTP env vars missing — SMTP_HOST:${host} SMTP_USER:${user ? "SET" : "MISSING"} SMTP_PASS:${pass ? "SET" : "MISSING"}`
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: false,
    auth: { user, pass },
    tls: { rejectUnauthorized: false },
  });
}
