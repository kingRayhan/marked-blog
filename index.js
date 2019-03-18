const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(require('./routes'))

app.listen(4545, () => {
    console.log('http://localhost:4545')
})
