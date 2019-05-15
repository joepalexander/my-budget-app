const jwt = require("jsonwebtoken");

module.exports = {
  
  createTokens: (user) => {

    const accessToken = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '60min'}
    );

    const refreshToken = jwt.sign(
      { userId: user.id, email: user.email, count: user.count },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d'}
    );

    return {refreshToken, accessToken}
  }

}