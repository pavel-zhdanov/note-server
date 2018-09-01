/* eslint-disable consistent-return */
const UserController = {};

UserController.setup = (User) => (req, res) => {
  const admin = new User({
    username: `admin`,
    password: `admin`,
  });
  admin.save((error) => {
    if (error) {
      throw error;
    }
    console.log(`Admin account was succesfully set up`);
    res.json({success: true});
  });
};

UserController.index = (User, token) => (req, res) => {
  if (token) {
    User.find({}, (error, users) => {
      if (error) {
        throw error;
      }
      res.status(200).json(users);
    });
  } else {
    return res.status(403).send({success: false, message: `Unauthorized`});
  }
};

UserController.signUp = (User) => (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.json({success: false, message: `Please, pass a username and password.`});
  }
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  newUser.save((error) => {
    if (error) {
      return res.status(400).json({success: false, message: `Username already exists.`});
    }
    res.json({success: true, message: `Account created successfully`});
  });

};

module.exports = UserController;
