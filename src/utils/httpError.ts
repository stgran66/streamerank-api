const messages = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  409: 'Conflict',
  500: 'Server Error',
};

type Status = 400 | 401 | 403 | 404 | 409 | 500;

// new class for http errors
class HttpError extends Error {
  public readonly status: number;

  constructor(message: string, status: Status) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}
// function for creating instances of HTTP errors by status
const httpError = (status: Status, message = messages[status]) => {
  return new HttpError(message, status);
};

module.exports = { HttpError, httpError };
