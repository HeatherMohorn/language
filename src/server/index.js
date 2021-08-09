const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

var appKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
//use this in post request
var url = baseURL + appKey + "&of=json&txt=" + text + "&lang=en";

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist');

console.log(JSON.stringify(mockAPIResponse))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/data', function(req, res){
  response.sendFile('dist/index.html');
})

app.post('/data', async function (req, res){
  const result = await
  fetch('https://api.meaningcloud.com/sentiment-2.1?key=' + process.env.API_KEY + '&url=' + request.body.formText + '&lang=en')

  try{
    const response = await result.json();
    res.send(response);
  } catch(error){
    console.log("error", error);
  }
})
