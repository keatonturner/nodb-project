const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
const port = 3002;
app.listen(port, () => {
    console.log('throwing shade on port: ${port}')
})