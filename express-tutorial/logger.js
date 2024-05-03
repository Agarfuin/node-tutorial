function logger(req, res, next) {
    const url = req.url;
    const method = req.method;
    const time = new Date().getFullYear();
    console.log(`url = ${url}, method = ${method}, time = ${time}`);
    next();
}

module.exports = logger;