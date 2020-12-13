import jwt from "jsonwebtoken";

function authenticate(req, res, next) {
  const authorizationHeader = req.headers["authorization"];
  let token;
  if (authorizationHeader) token = authorizationHeader.split(" ")[1];

  if (token) {
    // Validate token with the secret
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res
          .status(401)
          .send({ error: "Authentication refused! Unauthorized action." });
        res.end();
      } else {
        next();
      }
    });
  } else {
    res.status(401).send({
      error: "Unauthorized!",
    });
    res.end();
  }
}

export { authenticate };
