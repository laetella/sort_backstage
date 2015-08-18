var express = require('express');
var app = new express();
var hbs = require('hbs');
var sort = require('./sort.js');
var entries = require('./info.js');


app.set('view engine','html');
app.engine('html', hbs.__express);

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.get('/',function(req,res) {
  res.render('HomePage',{entries:entries});
});

app.get('/scores',function(req,res) {
  var sortKey = req.query.sortKey;
  var sortType = req.query.sortType;
  var result = sort(sortKey,sortType);
  res.send(result);
});

app.listen(8080);
