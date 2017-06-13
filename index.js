var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

var format = ".json";
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use port is set in the environment variable, or 9001 if it isn’t set.
app.set('port', (process.env.PORT || 9001));

//for testing that the app is running
app.get('/', function(req, res){
  res.send('Running!!');
});

//app.post is triggered when a POST request is sent to the URL ‘/post’
app.post('/post', function(req, res){
  //take a message from Slack slash command

  
var body = {
    response : 'ph-iodata, PW : 6949246599971'
}

res.send(body);
   
});

//tells Node which port to listen on
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});