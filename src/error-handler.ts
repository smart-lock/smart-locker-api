export const errorHandler = (err, req, res, next) => {
  const status = err && err.output && err.output.statusCode || 500
  const payload = err && err.output && err.output.payload || {
    statusCode: 500,
    error: 'Internal Server Error',
    message: err.toString(),
  }
  res.status(status).json(payload)
}
