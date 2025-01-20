const { exec } = require('child_process');
require('dotenv').config();

const token = process.env.WHATSAPP_TOKEN;
const phoneNumberId = "<PHONE_NUMBER_ID>";
const receiver = "6282258003821";

const command = `
curl -i -X POST https://graph.facebook.com/v21.0/${phoneNumberId}/messages \
-H "Authorization: Bearer ${token}" \
-H "Content-Type: application/json" \
-d '{
  "messaging_product": "whatsapp",
  "to": "${receiver}",
  "type": "template",
  "template": {
    "name": "hello_world",
    "language": {
      "code": "en_US"
    }
  }
}'
`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
