const { CustomError } = require('./custom-error');

class InvalidParametersError extends CustomError {
  static status = 400;
  static code = 'invalidParameters';
  constructor(message) {
    super(InvalidParametersError.status, InvalidParametersError.code, message);
  }
}

exports.InvalidParametersError = InvalidParametersError;
