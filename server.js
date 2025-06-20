const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(__dirname));
app.use(express.json());

app.post('/submit-voice', (req, res) => {
  const { message } = req.body;
  console.log("Voice message received from patient:", message);

  // Save to database or send to doctor here
  res.send({ status: "success", message: "Voice message received" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
