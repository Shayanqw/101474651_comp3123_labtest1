// question 03: add.js

const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

// 1) Create Logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
  console.log("📂 Logs directory created.\n");
} else {
  console.log("📂 Logs directory already exists.\n");
}

// 2) Change cwd to Logs
process.chdir(logsDir);

// 3) Create 10 files: log0.txt ... log9.txt
for (let i = 0; i < 10; i++) {
  const filename = `log${i}.txt`;
  fs.writeFileSync(
    filename,
    `This is log file ${i}\nCreated: ${new Date().toISOString()}\n`,
    "utf8"
  );
  console.log(`Created file → ${filename}`);
}

// Final confirmation
console.log("\n============================");
console.log("✅ All log files created.");
console.log("============================\n");
