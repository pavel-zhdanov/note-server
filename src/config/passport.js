const PassportJWT = require(`passport-jwt`);
const passport = require(`passport`);
const ExtractJWT = PassportJWT.ExtractJwt;
const JWTStrategy = PassportJWT.Strategy;
const config = require(`./config`);
const User = require(`../models/User`);

const options = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
};

const verify = (jwtPayload, done) => {
  User.findOne({_id: jwtPayload.id}, (error, user) => {
    if (error) {
      done(error, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
};

passport.use(new JWTStrategy(options, verify));

module.exports = passport;
