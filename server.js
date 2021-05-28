const express = require("express");
const app = express();

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log("This port is working");
});
