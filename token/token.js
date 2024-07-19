import jwt from "jsonwebtoken";
const secret = "secret_token_key";

const generateTkoen = (userInfo) => {
  return jwt.sign(userInfo, secret, { expiresIn: "1h" });
};

export default generateTkoen;
