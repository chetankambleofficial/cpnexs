import { getTransporter } from "@/lib/transporter";
import {
  COMPANY_NAME,
  COMPANY_WEBSITE,
  escapeHtml,
  renderThemedEmail,
  themedHeader,
  ICON,
} from "@/lib/mailTheme";

export const dynamic = "force-dynamic";

// ── row helper ────────────────────────────────────────────────────────────────
const row = (icon, label, value) => `
  <tr>
    <td style="padding:14px 16px;border-bottom:1px solid rgba(99,102,241,0.12);width:36%;vertical-align:top;">
      <span style="font-size:12px;font-weight:700;color:#6366f1;text-transform:uppercase;letter-spacing:1px;font-family:'Segoe UI',Arial,sans-serif;">
        ${icon}&nbsp;&nbsp;${label}
      </span>
    </td>
    <td style="padding:14px 16px;border-bottom:1px solid rgba(99,102,241,0.12);font-size:14px;color:#e2e8f0;line-height:1.6;word-break:break-word;font-family:'Segoe UI',Arial,sans-serif;">
      ${value}
    </td>
  </tr>`;

// ── Admin notification ────────────────────────────────────────────────────────
const contactNotificationTemplate = ({ name, email, phone, service, message }) =>
  renderThemedEmail(
    `New Contact Inquiry — ${COMPANY_NAME}`,
    `
    ${themedHeader("New Contact Inquiry")}
    <tr>
      <td style="padding:28px 32px 8px 32px;">
        <p style="margin:0;font-size:14px;color:#94a3b8;text-align:center;font-family:'Segoe UI',Arial,sans-serif;">
          A new inquiry was submitted via the <strong style="color:#a5b4fc;">${COMPANY_NAME}</strong> website.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px 32px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="background:#0a0f1e;border:1px solid rgba(99,102,241,0.2);border-radius:12px;overflow:hidden;">
          ${row(ICON.user,    "Name",    escapeHtml(name))}
          ${row(ICON.mail,    "Email",   `<a href="mailto:${escapeHtml(email)}" style="color:#60a5fa;text-decoration:none;">${escapeHtml(email)}</a>`)}
          ${row(ICON.phone,   "Phone",   escapeHtml(phone || "—"))}
          ${row(ICON.service, "Service", escapeHtml(service || "—"))}
          ${row(ICON.message, "Message", `<span style="white-space:pre-line;">${escapeHtml(message)}</span>`)}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 32px 32px;text-align:center;">
        <a href="mailto:${escapeHtml(email)}"
          style="display:inline-block;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;font-size:13px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:50px;font-family:'Segoe UI',Arial,sans-serif;letter-spacing:0.5px;">
          Reply to ${escapeHtml(name)}
        </a>
      </td>
    </tr>`,
  );

// ── User auto-reply ───────────────────────────────────────────────────────────
const contactAutoReplyTemplate = ({ name, email, phone, message }) =>
  renderThemedEmail(
    `Message Received — ${COMPANY_NAME}`,
    `
    ${themedHeader("Message Received")}
    <tr>
      <td style="padding:32px 32px 0 32px;">
        <p style="margin:0 0 12px 0;font-size:16px;color:#e2e8f0;font-family:'Segoe UI',Arial,sans-serif;">
          Hi <strong style="color:#a5b4fc;">${escapeHtml(name)}</strong>,
        </p>
        <p style="margin:0 0 24px 0;font-size:14px;color:#94a3b8;line-height:1.8;font-family:'Segoe UI',Arial,sans-serif;">
          Thanks for reaching out to <strong style="color:#e2e8f0;">${COMPANY_NAME}</strong>. We've received your message
          and will get back to you within <strong style="color:#a5b4fc;">24 hours</strong>.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 24px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="background:#0a0f1e;border:1px solid rgba(99,102,241,0.2);border-left:3px solid #7c3aed;border-radius:12px;">
          <tr>
            <td style="padding:20px 24px;">
              <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;color:#6366f1;letter-spacing:2px;text-transform:uppercase;font-family:'Segoe UI',Arial,sans-serif;">
                ${ICON.message}&nbsp;&nbsp;Your Message
              </p>
              <p style="margin:0;font-size:14px;color:#cbd5e1;line-height:1.7;white-space:pre-line;font-family:'Segoe UI',Arial,sans-serif;">
                ${escapeHtml(message)}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 24px 32px;">
        <p style="margin:0;font-size:13px;color:#64748b;line-height:1.7;font-family:'Segoe UI',Arial,sans-serif;">
          We'll reach out to you at
          <a href="mailto:${escapeHtml(email)}" style="color:#60a5fa;text-decoration:none;">${escapeHtml(email)}</a>${
            phone ? ` or <a href="tel:${escapeHtml(phone)}" style="color:#60a5fa;text-decoration:none;">${escapeHtml(phone)}</a>` : ""
          }.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 32px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="background:#0a0f1e;border:1px solid rgba(99,102,241,0.2);border-radius:12px;overflow:hidden;">
          <tr>
            <td style="padding:16px 20px;border-bottom:1px solid rgba(99,102,241,0.12);">
              <p style="margin:0;font-size:11px;font-weight:700;color:#6366f1;letter-spacing:2px;text-transform:uppercase;font-family:'Segoe UI',Arial,sans-serif;">
                What Happens Next
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="padding:5px 0;font-size:13px;color:#94a3b8;font-family:'Segoe UI',Arial,sans-serif;">${ICON.check}&nbsp;&nbsp;Our team reviews your inquiry</td></tr>
                <tr><td style="padding:5px 0;font-size:13px;color:#94a3b8;font-family:'Segoe UI',Arial,sans-serif;">${ICON.check}&nbsp;&nbsp;We prepare a tailored response within 24 hours</td></tr>
                <tr><td style="padding:5px 0;font-size:13px;color:#94a3b8;font-family:'Segoe UI',Arial,sans-serif;">${ICON.check}&nbsp;&nbsp;We connect to discuss your project in detail</td></tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 32px 32px;text-align:center;">
        <a href="${COMPANY_WEBSITE}"
          style="display:inline-block;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;font-size:13px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:50px;font-family:'Segoe UI',Arial,sans-serif;letter-spacing:0.5px;">
          Visit ${COMPANY_NAME}
        </a>
      </td>
    </tr>`,
  );

// ── POST handler ──────────────────────────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    let transporter;
    try {
      transporter = getTransporter();
    } catch (envError) {
      console.error("Transporter init failed:", envError.message);
      return Response.json({ error: "Mail service misconfigured" }, { status: 500 });
    }

    try {
      await transporter.sendMail({
        from: `"${COMPANY_NAME}" <${process.env.CONTACT_FROM_EMAIL}>`,
        to: process.env.CONTACT_TO_EMAIL,
        subject: `New Inquiry from ${name} — ${COMPANY_NAME}`,
        html: contactNotificationTemplate({ name, email, phone, service, message }),
      });

      await transporter.sendMail({
        from: `"${COMPANY_NAME}" <${process.env.CONTACT_FROM_EMAIL}>`,
        to: email,
        subject: `We received your message — ${COMPANY_NAME}`,
        html: contactAutoReplyTemplate({ name, email, phone, message }),
      });
    } catch (emailError) {
      console.error("========== EMAIL ERROR ==========");
console.error("Message:", emailError.message);
console.error("Code:", emailError.code);
console.error("Command:", emailError.command);
console.error("Response:", emailError.response);
console.error("ResponseCode:", emailError.responseCode);
console.error("Stack:", emailError.stack);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true, message: "Message received successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
