const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here

app.use(express.static('public'));

app.listen(port);
console.log('Server started at http://localhost:' + port);