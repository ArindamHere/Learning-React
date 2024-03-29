const jwt = require('jsonwebtoken');
const JWT_SECRET = "ArindamHere";

const fetchUser = (req, res, next) => {
    //GET the user from jwt token and add the id to req obj

    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;

        next();
    } catch (err) {
        res.status(401).send({ error: "Please authenticate a valid token" })
    }

}

module.exports = fetchUser;
