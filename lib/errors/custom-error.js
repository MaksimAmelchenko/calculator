class CustomError extends Error {
  code;
  status;
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

exports.CustomError = CustomError;
