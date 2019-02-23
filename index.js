
'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  db = require('./db.js'),
  env = require('./env'),
  cors = require('cors');

const app = express();
const PORT = env.PORT;

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Content-Type', 'application/json');
    next();
});


const routes = [
  require('./routers/doctor'),
  require('./routers/patient')
];


// Add access to the app and db objects to each route
function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};

router(app, db);

//drop and resync with { force: true }
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});