const jwt = require("jsonwebtoken");
const secret = process.env.KEY;

const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).json({ error: "No token provided" });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Failed to authenticate token" });
        }

        // Save the decoded token to request object for use in other routes
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;
