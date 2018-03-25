const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

require('./routes/root')


app.listen(process.env.port || 5000)