const express = require('express');
const restify = require('express-restify-mongoose');
//models variables
const Img = require('../models/Img');
var app = express();
var router = express.Router();

restify.serve(router, Img, {name: 'images'});

app.use(express.static('public'));
app.use(router);

module.exports = app;
