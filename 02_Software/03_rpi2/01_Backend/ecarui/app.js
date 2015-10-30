// -------------------------
// ---- DATABASE STUFF -----
// -------------------------
/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

// Define schemas


// Connect DB
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {	
	
});
*/



// ---------------------------
// ----- WEBSERVER STUFF -----
// ---------------------------
var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();


// -------------------------
// ------ PREPARATION ------
// -------------------------
app.set('port', process.env.PORT || 80); //http #yolo

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// -------------------------
// ----- ROUTING STUFF -----
// -------------------------
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


// -------------------------
// ---- SERVER CREATION ----
// -------------------------
http.createServer(app).listen(app.get('port'), function() {
	console.log("http server up on port "+ app.get('port'));
});

module.exports = app;
