function authorize(req, res, next) {
    const { user } = req.query;
    if (user === 'harun') {
        req.user = { name: 'harun', id: 3 };
        next();
    }
    else {
        res.status(404).send('Unauthorized');
    }
}

module.exports = authorize;