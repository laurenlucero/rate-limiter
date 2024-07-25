class RateLimiter {
  constructor(maxRequests, timeWindowMs) {
    this.maxRequests = maxRequests;
    this.timeWindowMs = timeWindowMs;
    this.requestLogs = new Map();
  }

  processRequest(path, clientIp) {
    const key = `${path}:${clientIp}`;
    const currentTime = Date.now();

    if (!this.requestLogs.has(key)) {
      this.requestLogs.set(key, []);
    }

    const userLogs = this.requestLogs.get(key);

    const isOutsideWindow = userLogs[0] < currentTime - this.timeWindowMs;

    while (userLogs.length && isOutsideWindow) {
      userLogs.shift();
    }

    if (userLogs.length < this.maxRequests) {
      userLogs.push(currentTime);
      return true;
    }
    return false;
  }
}

module.exports = RateLimiter;
