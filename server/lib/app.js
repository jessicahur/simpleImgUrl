const express = require('express');
const restify = require('express-restify-mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
//models variables
const Img = require('../models/Img');
var app = express();
var router = express.Router();

restify.serve(router, Img, {name: 'images'});

app.use(logger('dev'));

app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false }) );

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.static('public'));
app.use(router);


module.exports = app;
