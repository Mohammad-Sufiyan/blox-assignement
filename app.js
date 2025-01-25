var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const question2Router=require('./api/routes/question2Router')
const question5Router=require('./api/routes/quetion5Router')
var app = express();
var port = process.env.PORT || 3030;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/compare',question2Router)
app.use('/api/transaction',question5Router)

app.listen(port, () => console.log("App running on " + port))
module.exports = app;
