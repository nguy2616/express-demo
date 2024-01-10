const express = require('express');
const app = express();
const port = 3000;
const os = require('os');
app.get('/', (req, res) => {
  console.log(os.hostname());
  res.send(`Hello World from ${os.hostname()}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
