/* eslint-disable no-invalid-this,new-cap */
const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
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
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
      return next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = async function (password, callback) {
  const match = await bcrypt.compare(password, this.password);
  if (match) {
    return callback(null, match);
  }
  return callback(new Error(`password is wrong`));
};

mongoose.model(`User`, UserSchema);
