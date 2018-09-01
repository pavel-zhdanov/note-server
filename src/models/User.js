/* eslint-disable no-invalid-this,new-cap */
const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  password: {
    type: String,
    required: true
  },
});

// Здесь не будем пользоваться стрелочными функциями из-за автоматической привязки к лексической области видимости
UserSchema.pre(`save`, async function (next) {
  const user = this;
  if (user.isModified(`password`) || user.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

UserSchema.methods.comparePassword = async function (password, callback) {
  console.log(`Компаре`);
  const match = await bcrypt.compare(password, this.password);
  if (match) {
    return callback(null, match);
  }
  return callback(new Error(`password is wrong`));
};

module.exports = mongoose.model(`User`, UserSchema);
