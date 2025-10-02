// question 03: remove.js

const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

if (fs.existsSync(logsDir)) {
  const files = fs.readdirSync(logsDir);

  if (files.length === 0) {
    console.log("📂 Logs directory exists but is empty.");
  } else {
    for (const file of files) {
      fs.unlinkSync(path.join(logsDir, file));
      console.log(`🗑️   Deleted → ${file}`);
    }
  }

  fs.rmdirSync(logsDir);
  console.log("\n============================");
  console.log("✅ Logs directory removed.");
  console.log("============================\n");
} else {
  console.log("\n====================================================");
  console.log("⚠️  Logs directory does not exist. Nothing to remove.");
  console.log("====================================================\n");
}
