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

passport.use(new JWTStrategy(options, (jwtPayload, done) => {
  User.findOne({id: jwtPayload.id}, (error, user) => {
    if (error) {
      done(error, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
}));

module.exports = passport;
