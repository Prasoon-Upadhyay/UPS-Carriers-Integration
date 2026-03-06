import { Request, Response, NextFunction } from "express";
import { AppError, ErrorDetails } from "./errors";

export interface ErrorResponse {
  error: string;
  details: ErrorDetails;
}

export function errorHandler(
  err: AppError,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
): void {
  console.error(err);

  res.status(err.statusCode).json({
    error: err.message,
    details: err.details,
  });
}