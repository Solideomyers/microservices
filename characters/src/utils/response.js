module.exports = async (res, statusCode, data) => {
    await res.status(statusCode).json({
        error: false,
        data,
    });
};