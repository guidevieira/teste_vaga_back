const express = require('express')
const routes = require('./routes')
var cors = require('cors')

const app = express()
app.use(cors());

app.use(express.json())
var server = require('http').Server(app)
app.use('/api',routes)



server.listen(process.env.Port || '3001', () =>{
    console.log('rodo')
})