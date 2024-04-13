class APIError extends Error {
  constructor(
    statusCode = 500,
    message = "Internal Server error",
    success = false,
    error = new Error(message),
    stack = []
  ) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.success = success;
    this.data = null;
    this.error = error;
    this.stack =
      stack.length === 0
        ? Error.captureStackTrace(this, this.constructor)
        : stack;
  }
}

module.exports = APIError;
