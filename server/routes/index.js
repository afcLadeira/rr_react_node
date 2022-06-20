const express = require('express');
const app = express();

let test = require('./test');
app.use('/test', test);

let users = require('./users');
app.use('/users', users);

module.exports = app;