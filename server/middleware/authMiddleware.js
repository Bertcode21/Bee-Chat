const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // 1. Get token from headers (commonly Authorization header as 'Bearer <token>')
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
      return res.send({
        message: 'No token provided or malformed token',
        success: false
      });
    }

    const token = authHeader.split(' ')[1]; // Get token part after 'Bearer'

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.Secret_Key);

    // 3. Attach user info to request object for downstream middlewares/controllers
    req.body.userId = decoded;
    // req.user = decoded;

    // 4. Proceed
    next();

  } catch (error) {
    return res.status(401).json({
      message: 'Authentication failed: ' + error.message,
      success: false
    });
  }
};
