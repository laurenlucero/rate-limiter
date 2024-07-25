const RateLimiter = require("./rateLimiter");

const rateLimiter = new RateLimiter(3, 60000);

const rateLimiterMiddleware = (req, res, next) => {
  const path = req.path;
  const clientIp = req.ip;

  if (rateLimiter.processRequest(path, clientIp)) {
    next();
  } else {
    res.status(429).send("Too Many Requests");
  }
};

module.exports = rateLimiterMiddleware;
