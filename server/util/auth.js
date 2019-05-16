const jwt = require("jsonwebtoken");

module.exports = {
  
  createTokens: (user) => {

    const accessToken = jwt.sign(
      { userId: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '60min'}
    );

    const refreshToken = jwt.sign(
      { userId: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d'}
    );

    return {refreshToken, accessToken}
  }

}