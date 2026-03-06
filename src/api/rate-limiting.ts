import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    error: "Too many requests",
    details: {
      message: "Rate limit exceeded. Try again later."
    }
  }
});