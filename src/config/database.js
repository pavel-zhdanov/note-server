const mongoose = require(`mongoose`);
const config = require(`./config`);
const database = mongoose.connection;
mongoose.Promise = Promise;
mongoose.set(`useCreateIndex`, true);

module.exports = () => {
  mongoose.connect(config.database,
      {useNewUrlParser: true});
  database.on(`error`, (error) => console.log(`Connection to database failed: ${error}`));
  database.on(`connected`, () => console.log(`Connected to database`));
  database.on(`disconnected`, () => console.log(`Disconnected from database`));
  process.on(`SIGINT`, () => {
    database.close(() => {
      console.log(`App terminated, connection closed`);
      process.exit(0);
    });
  });
};
