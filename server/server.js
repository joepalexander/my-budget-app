"user strickt";

require('dotenv').config();

const PORT        = 5000;
const ENV         = process.env.ENV || "development";

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');

const express     = require('express');
const app         = express();

app.use(knexLogger(knex));

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1>`)
});

app.get('/greeting', (req, res) => {
  knex('greetings')
    .select('*')
    .returning('*')
    .then(greetings => {
      res.json(greetings)
    })
});

app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}.`)
});