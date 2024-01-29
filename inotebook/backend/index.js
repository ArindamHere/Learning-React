const connextToMongo = require("./db");
const express = require('express')

connextToMongo();

const app = express()
const port = 5000

app.use(express.json())
app.use(
    express.urlencoded({ extended: true })
);


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})