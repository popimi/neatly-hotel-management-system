import jwt from "jsonwebtoken";

// check token
export const protect = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token has invalid format" });
  }
  const tokenWithoutBearer = token.split(" ")[1];

  jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid" });
    }
    req.user = payload;
    next();
  });
};

// check role
export const checkRole = (roles = []) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(401).json({ message: "Role is not defined" });
    }
    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "You don't have permission" });
    }
    next();
  };
};
