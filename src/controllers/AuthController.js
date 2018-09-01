const mongoose = require(`mongoose`);
const jwt = require(`jsonwebtoken`);
const config = require(`../config/config`);

const AuthController = {};

AuthController.login = (User) => (req, res) => {
  User.findOne({username: req.body.username}, (errorFindUser, user) => {
    if (errorFindUser) {
      throw errorFindUser;
    }
    if (!user) {
      console.log(`login`);
      res.status(401).send({success: false, message: `Authentication failed. User not found.`});
    } else {
      user.comparePassword(req.body.password, (errorCompare, match) => {
        if (match && !errorCompare) {
          const token = jwt.sign({user}, config.secret);
          res.json({success: true, message: `Token granted`, token});
        } else {
          res.sendStatus(401).json({success: false, message: `Authentication failed. Wrong password.`});
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
