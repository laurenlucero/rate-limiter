const RateLimiter = require("../src/rateLimiter");

describe("RateLimiter", () => {
  test("allows requests under the limit", () => {
    const rateLimiter = new RateLimiter(3, 60000);
    for (let i = 0; i < 3; i++) {
      expect(rateLimiter.processRequest("/api/test", "127.0.0.1")).toBe(true);
    }
    expect(rateLimiter.processRequest("/api/test", "127.0.0.1")).toBe(false);
  });

  test("resets after the window", () => {
    const rateLimiter = new RateLimiter(3, 60);
    for (let i = 0; i < 3; i++) {
      expect(rateLimiter.processRequest("/api/test", "127.0.0.1")).toBe(true);
    }
    setTimeout(() => {
      expect(rateLimiter.processRequest("/api/test", "127.0.0.1")).toBe(true);
    }, 70);
  });

  test("allows requests to another endpoint within the same window", () => {
    const rateLimiter = new RateLimiter(3, 60000);
    for (let i = 0; i < 3; i++) {
      expect(rateLimiter.processRequest("/api/test", "127.0.0.1")).toBe(true);
    }
    expect(rateLimiter.processRequest("/api/test-two", "127.0.0.1")).toBe(true);
  });

  test("allows requests from different clients within the same window", () => {
    const rateLimiter = new RateLimiter(3, 60000);
    for (let i = 0; i < 3; i++) {
      expect(rateLimiter.processRequest("/api/test", "127.0.0.1")).toBe(true);
    }
    expect(rateLimiter.processRequest("/api/test", "227.0.0.2")).toBe(true);
  });
});
