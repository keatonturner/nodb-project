require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const pc = require('./controller/Player-controller')

app.use(bodyParser.json());


app.get('/api/playerList', pc.read) 
app.post('/api/myPlayerList', pc.add)
app.put('/api/getPlayer/:id', pc.update)
app.delete('/api/myPlayerList/:id', pc.delete)


const PORT = 3002;
app.listen(PORT, () => {
    console.log(`port: ${PORT}`)
})
