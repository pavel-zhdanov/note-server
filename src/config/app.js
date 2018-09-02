const express = require(`express`);
const bodyParser = require(`body-parser`);
const morgan = require(`morgan`);
const cors = require(`cors`);

const app = express();
require(`./database`)();
const passportConfig = require(`./passport`);
const authRouter = require(`../routes/authRouter`);

app.use(express.static(`.`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(cors());
app.use(passportConfig.initialize());

app.use(`/api`, authRouter);

module.exports = app;

