// setup.js
const { exec } = require("child_process");

const cmd = `
echo "Subscribe mmjplays on yt link : https://www.youtube.com/@progamer69-l1f" &&
sleep 3 &&
npm init -y &&
npm install discord.js dotenv &&
git add . &&
git commit -m "Initial Discord bot setup" &&
git push origin main
`;

exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Stderr: ${stderr}`);
    return;
  }
  console.log(`✅ Output:\n${stdout}`);
});
