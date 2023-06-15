const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars').engine;
const morgan = require('morgan');
const app = express();
const methodOverride = require("method-override");
const port = 3000;
const db = require('./config/db');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

db.connect();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum(a, b) {
        return a + b;
      },
    },
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
