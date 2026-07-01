export const COMPANY_NAME = "CPNexs";
export const COMPANY_WEBSITE = "https://www.cpnexs.com";
export const COMPANY_TAGLINE = "Digital Studio";
export const CONTACT_EMAIL = "cpnexs@gmail.com";

export const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Unicode symbols — render in every email client, no image blocking
export const ICON = {
  user:    "&#128100;", // 👤
  mail:    "&#9993;",   // ✉
  phone:   "&#128222;", // 📞
  message: "&#128172;", // 💬
  service: "&#128187;", // 💻
  check:   "&#10003;",  // ✓
};

export const themedHeader = (badgeText) => `
  <tr>
    <td style="background:linear-gradient(135deg,#0d1b4b 0%,#0a0f2e 40%,#1a0533 100%);padding:0;text-align:center;">
      <div style="height:3px;background:linear-gradient(to right,#2563eb,#7c3aed,#a855f7);font-size:0;line-height:0;">&nbsp;</div>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding:28px 32px 16px 32px;text-align:center;">
            <img src="https://www.cpnexs.com/images/logowhite.png" alt="${COMPANY_NAME}" width="120"
              style="display:inline-block;max-height:40px;border:0;outline:none;" />
          </td>
        </tr>
        <tr>
          <td style="padding:0 32px 28px 32px;text-align:center;">
            <div style="display:inline-block;background:rgba(99,102,241,0.18);border:1px solid rgba(139,92,246,0.4);border-radius:50px;padding:6px 20px;">
              <span style="color:#a5b4fc;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;font-family:'Segoe UI',Arial,sans-serif;">
                ${escapeHtml(badgeText)}
              </span>
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;

const themedFooter = () => `
  <tr>
    <td style="background:#080d1f;border-top:1px solid rgba(99,102,241,0.2);padding:28px 32px;text-align:center;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="center" style="padding-bottom:12px;">
            <img src="https://www.cpnexs.com/images/logowhite.png" alt="${COMPANY_NAME}" width="80"
              style="display:inline-block;max-height:28px;opacity:0.65;border:0;outline:none;" />
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-bottom:8px;">
            <span style="font-size:12px;color:#4b5563;font-family:'Segoe UI',Arial,sans-serif;">
              ${COMPANY_NAME} &mdash; ${COMPANY_TAGLINE}
            </span>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-bottom:8px;">
            <span style="font-size:11px;color:#374151;font-family:'Segoe UI',Arial,sans-serif;">
              This is an automated email. Please do not reply directly.
            </span>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-bottom:8px;">
            <a href="${COMPANY_WEBSITE}" target="_blank"
              style="font-size:12px;color:#6366f1;text-decoration:none;font-weight:600;font-family:'Segoe UI',Arial,sans-serif;">${COMPANY_WEBSITE}</a>
            &nbsp;&nbsp;
            <a href="mailto:${CONTACT_EMAIL}"
              style="font-size:12px;color:#6366f1;text-decoration:none;font-weight:600;font-family:'Segoe UI',Arial,sans-serif;">${CONTACT_EMAIL}</a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <span style="font-size:11px;color:#1f2937;font-family:'Segoe UI',Arial,sans-serif;">
              &copy; ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.
            </span>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;

export const renderThemedEmail = (title, body) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${escapeHtml(title)}</title>
  <style>
    @media only screen and (max-width:640px){
      .email-wrapper{padding:12px 8px !important;}
      .email-section{padding:20px 16px !important;}
      .detail-label{width:auto !important;display:block !important;}
      .detail-value{display:block !important;}
    }
  </style>
</head>
<body style="margin:0;padding:32px 16px;background:#030712;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="max-width:600px;width:100%;background:#0d1117;border-radius:16px;overflow:hidden;border:1px solid rgba(99,102,241,0.2);box-shadow:0 0 60px rgba(99,102,241,0.08);">
          ${body}
          ${themedFooter()}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
