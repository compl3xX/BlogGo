const CustomError = require('../utilis/customError')

const customErrorHandler = (err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message,
    })
}

module.exports = customErrorHandler