// importing ExpressError since we used it in our checkForPassword function
const ExpressError = require("./expressError");


function logger(req, res, next) {
    console.log(`RECEIVED a ${req.method} request to ${req.path}`);
    return next();
}

function checkForPassword(req, res, next) {
    try {
        if (req.query.password !== 'monkeybreath') {
            throw new ExpressError("Missing password", 402);
        }
        return next()
    } catch (err) {
        return next(err)
    }
}

module.exports = {
    logger,
    checkForPassword
}