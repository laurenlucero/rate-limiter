const express = require("express");
const rateLimiterMiddleware = require("./rateLimiterMiddleware");

const app = express();

app.use(rateLimiterMiddleware);

app.get("/api/demo", (req, res) => {
  res.send(`Request success`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
