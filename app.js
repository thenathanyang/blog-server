var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var auth = require('./utils/auth');
var db = require('./utils/db');

db.connect('mongodb://localhost:27017', 'BlogServer', err => {
	if (err) throw err;
	console.log("Connected to MongoDB");
});

var blog = require('./routes/blog');
var login = require('./routes/login');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/blog', blog);
app.use('/login', login);
app.use('/api', api);

app.use('/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));
// app.use('/edit', res, express.static(path.join(__dirname, 'public/edit')));

app.use('/edit', auth.validateAuth, express.static(path.join(__dirname, 'public/edit')));

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
