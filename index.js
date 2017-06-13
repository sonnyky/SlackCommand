var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

var format = ".json";
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var slackToken = process.env.SLACK_TOKEN;
var teamId = process.env.SLACK_TEAM_ID;

//use port is set in the environment variable, or 9001 if it isn’t set.
app.set('port', (process.env.PORT || 9001));

//for testing that the app is running
app.get('/', function(req, res){
  res.send('Running!!');
});

//app.post is triggered when a POST request is sent to the URL ‘/post’
app.post('/post', function(req, res){
  //take a message from Slack slash command
  var body = '本サービスをご利用できませんｍ ｍ' 
  var token = req.query.token;
  var requesterTeamId = req.query.team_id;
  if(token === slackToken && teamId === requesterTeamId){
    body = 'ph-iodata1 のアクセスポイント使ってね～　パスワードは : 6949246599971 モグ！'
  }
  res.send(body);
   
});

//tells Node which port to listen on
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});