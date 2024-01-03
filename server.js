const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`🌍 Connected to port ${PORT}!`);
  });
});