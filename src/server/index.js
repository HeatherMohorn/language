const dotenv = require('dotenv');
dotenv.config();
const { allowedNodeEnvironmentFlags } = require('process');

var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const FormData = require('form-data');

const API_KEY = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/usertext', async(req, res) => {
    const userURL = req.body.formText;
    const response = await fetch(baseURL + API_KEY + "&lang=en&url=" + userURL)
    .then(response => response.json())
    .then(response => res.send(response))
    .catch(error => console.log('error', error));
  })
