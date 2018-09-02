const express = require(`express`);
const bodyParser = require(`body-parser`);
const morgan = require(`morgan`);
const cors = require(`cors`);

const config = require(`./config`);
const app = express();
require(`./database`)();
const passport = require(`./passport`);
const authRouter = require(`../routes/authRouter`);
const noteRouter = require(`../routes/noteRouter`);

app.use(express.static(`.`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(cors());
app.use(passport.initialize());

app.use(`/api`, authRouter);

app.use(`/api/note`, passport.authenticate(`jwt`, config.session), noteRouter);

module.exports = app;

