class APIResponse {
  constructor(
    statusCode = 200,
    message = "API Response Successful",
    success = true,
    data = null,
    error = null
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.success = success;
    this.data = data;
    this.error = error;
  }
}

module.exports = APIResponse
