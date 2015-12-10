'use strict';

var express = require('express');
var path = require('path');
var app = express();

var processListData = require('./data/process-list');

app.use(express.static('build'));
app.use(express.static('src/app'));
app.use(express.static('css'));
app.use(express.static('js'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/getProcessList', function (req, res){
  res.json(processListData);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
