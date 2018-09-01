const app = require(`./src/config/app`);
const port = 3001;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`we live on http://localhost:${port}`);
});
