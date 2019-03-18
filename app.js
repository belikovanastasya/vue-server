// Imports
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Require routes They are yet to be created
var index = require('./routes/index');
const api = require('./routes/api/index');

// Setup an express app
var app = express();
// ************************** Database connection here ********************
// ************************** CORS config will be here ******************** view
// engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configure middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/users', users);
app.use('/api/v1', api)

module.exports = app;