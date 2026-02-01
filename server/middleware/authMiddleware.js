const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
      return res.status(401).json({
        message: 'No token provided or malformed token',
        success: false
      });
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, process.env.Secret_Key);

    // ✅ attach decoded token to req.user
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: 'Authentication failed: ' + error.message,
      success: false
    });
  }
};
