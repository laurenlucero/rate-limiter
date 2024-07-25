# Rate Limiter Project

This project implements a rate-limiting mechanism for an API built with Node.js and Express. It includes unit tests using Jest to ensure the functionality of the rate limiter.

The rate limiter implements a sliding window algorithm to allow each user a maximum of 3 requests per minute per endpoint. It uses an in-memory store to track the number of requests and enforces the rate limit.

- **src/rateLimiter.js**: Implements the rate-limiting logic.
- **src/rateLimiterMiddleware.js**: Middleware to apply the rate limiter to incoming requests.
- **src/server.js**: Sets up the Express server and applies the rate limiter middleware.
- **tests/rateLimiter.test.js**: Unit tests for the rate limiter.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies: `npm install`

### Running the Server

To start the server, run: `npm start`
The server will be running on `http://localhost:3000`.

### Testing

To run the tests, use: `npm test`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
