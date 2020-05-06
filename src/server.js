const express = require('express')
const knex = require('./database')

const app = express()

app.use(express.json())
app.use(require('./routes'))


app.listen(3000, () => {console.log('Server is running')})