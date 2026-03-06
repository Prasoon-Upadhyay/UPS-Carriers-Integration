export interface ErrorDetails {
  [key: string]: string | number | boolean | ErrorDetails | ErrorDetails[];
}

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly details: ErrorDetails;

  constructor(message: string, statusCode: number = 500, details: ErrorDetails = {}) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}