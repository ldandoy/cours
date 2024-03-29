// ~/cours-nodejs/server/middleswares/errorHandler.js

const errorHandler = (req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? "Erreur" : error.stack
    })
}

module.exports = errorHandler