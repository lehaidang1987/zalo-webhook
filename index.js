const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Để đọc JSON từ request body
app.use(bodyParser.json());

// Endpoint nhận webhook từ Zalo OA
app.post('/zalo/webhook', (req, res) => {
  const data = req.body;
  console.log("📥 Webhook received from Zalo:", JSON.stringify(data, null, 2));

  // Gửi lại status 200 để xác nhận đã nhận
  res.status(200).send('OK');
});

// Test endpoint (GET)
app.get('/', (req, res) => {
  res.send("Webhook server is running.");
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`🚀 Webhook server listening on port ${PORT}`);
});
