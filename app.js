var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var wechat = require('wechat');

var index = require('./routes/index');
var users = require('./routes/users');
var wx = require('./routes/wx_handler');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.query());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  console.log(req);
  next();
});

app.use('/', index);
app.use('/users', users);
// app.use('/wx', wx);



app.use('/wx', wechat('wen911119').text(function (message, req, res, next) {
    // TODO
    console.log(1234567890);
    res.reply('text');
    next();
}).image(function (message, req, res, next) {
    // TODO
    res.reply('img');
    next();
}).voice(function (message, req, res, next) {
    // TODO
    res.reply('voice.');
    next();
}).video(function (message, req, res, next) {
    // TODO
    res.reply('video.');
    next();
}).location(function (message, req, res, next) {
    // TODO
    res.reply('location.');
    next();
}).link(function (message, req, res, next) {
    // TODO
    res.reply('link.');
    next();
}).event(function (message, req, res, next) {
    // TODO
    res.reply('event.');
    next();
}).device_text(function (message, req, res, next) {
    // TODO
    res.reply('这条回复会推到设备里去.');
    next();
}).device_event(function (message, req, res, next) {
    // TODO
    res.reply('这条回复会推到设备里去.evevt');
    next();
}).middlewarify());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
