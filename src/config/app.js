const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const startDB = require(`./database`);
startDB();
const morgan = require(`morgan`);
const cors = require(`cors`);

const passportConfig = require(`./passport`);

const authRouter = require(`../routes/authRoute`);
const userRouter = require(`../routes/userRoute`);

app.use(express.static(`.`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(cors());
app.use(passportConfig.initialize());

app.use(`/`, authRouter);
app.use(`/api/v1`, userRouter);

module.exports = app;

