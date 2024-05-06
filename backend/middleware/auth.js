const { verifyToken } = require("../utils/jwt");

async function isAuthenticated(req, res, next) {
  const token = req.headers?.authorization;
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  const user = await verifyToken(token);
  if (!user.id) {
    return res.status(401).json({ message: "Failed to authenticate token" });
  }
  req.userId = user.id;
  next();
}
async function isAdmin(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "UnAuthorized" });
    }
    const user = await  verifyToken(token);
    if (!user || user.role!=="admin") {
      return res.status(401).json({ message: "UnAuthorized" });
    }
    req.userId = user.id;
    next();
  }
module.exports = {isAuthenticated,isAdmin};
