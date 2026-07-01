const fs = require("fs");
const path = require("path");

const imgPath = path.join(__dirname, "../public/images/logowhite.png");
const outPath = path.join(__dirname, "../lib/logoBase64.js");

const b64 = fs.readFileSync(imgPath).toString("base64");
fs.writeFileSync(outPath, `export const LOGO_BASE64 = "data:image/png;base64,${b64}";\n`);

console.log("✅ logoBase64.js generated");
