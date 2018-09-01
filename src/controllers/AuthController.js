const jwt = require(`jsonwebtoken`);
const config = require(`../config/config`);

const AuthController = {};

AuthController.login = (User) => (req, res) => {
  User.findOne({username: req.body.username}, (errorFindUser, user) => {
    if (errorFindUser) {
      throw errorFindUser;
    }
    console.log(`AC-login`);
    if (!user) {
      console.log(`login`);
      res.status(401).send({success: false, message: `Authentication failed. User not found.`});
    } else {
      user.comparePassword(req.body.password, (errorCompare, match) => {
        console.log(`AC-compare`);
        if (match && !errorCompare) {
          console.log(`AC-compare-if`);
          const token = jwt.sign({user}, config.secret);
          res.json({success: true, message: `Token granted`, token});
        } else {
          console.log(`AC-compare-else`);
          res.status(401).send({success: false, message: `Authentication failed. Wrong password.`});
        }
      });
    }
  });
};

AuthController.verify = (headers) => {
  if (headers && headers.authorization) {
    const split = headers.authorization.split(` `);
    if (split.length === 2) {
      return split[1];
    }
  }
  return null;
};

module.exports = AuthController;
