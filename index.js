const express = require('express')
const app = express()
app.use(require('./routes'))
app.listen(4545, () => {
    console.log('API server working on http://localhost:4545')
})
