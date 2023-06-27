"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not found',
    409: 'Conflict',
    500: 'Server Error',
};
// new class for http errors
class HttpError extends Error {
    constructor(message, status) {
        super(message);
        this.name = 'HttpError';
        this.status = status;
    }
}
// function for creating instances of HTTP errors by status
const httpError = (status, message = messages[status]) => {
    return new HttpError(message, status);
};
module.exports = { HttpError, httpError };
