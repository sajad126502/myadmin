const jwt = require("jsonwebtoken");

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email,role:user.role }, process.env.jwt_secret, {
    expiresIn: process.env.jwt_expiry,
  });
}
async function verifyToken(token) {
    if (!token) {
      return false;
    }
  
    try {
      const decoded = await new Promise((resolve, reject) => {
        jwt.verify(token.split(" ")[1], process.env.jwt_secret, (err, decoded) => {
          if (err) {
            reject(err);
          } else {
            resolve(decoded);
          }
        });
      });
  
      return decoded;
    } catch (err) {
      return false;
    }
  }

module.exports = { generateToken, verifyToken };
