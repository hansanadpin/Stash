const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send({ status: "fail", payload: [{ msg: "unauthorized", data: [] }] });
  }

  try {
    console.log(token)
    console.log(process.env.SECRET_KEY)
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    console.log("Auth Success") 
    next(); 
  } catch (error) {
    console.error(error);
    res.status(401).send('Access denied. Token invalid.');
  }
};

module.exports = authenticateToken;




