var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');//调试模块 用于输出一些调试信息
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');//格式化request数据的中间件

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//设置模板引擎
// view engine setu
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/admin',require('./routes/admin/add'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

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


app.listen(3000,function(){
  console.log('服务器运行于3000端口');
});
