const dotenv = require('dotenv');
dotenv.config();
const { allowedNodeEnvironmentFlags } = require('process');

var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const API_KEY = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
//use this in post request

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const getSentiment = async(userURL) => {
    const res = await fetch(baseURL + API_KEY + "&lang=en&url=" + userURL);
    try {
        const data = await res.json();
        console.log('data: ', data);
        return data;
    } catch(error) {
        console.log('error', error);
    }
}

app.use(express.static('dist');


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})



app.post('/add', async function(req, res) {
    res.send(await getSentiment(req.body.url));
});
