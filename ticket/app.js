const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//db connect
const conn = require('./db/conn');
conn();

//routes
const routes = require('./routes/router')

app.use('/api', routes)

app.listen(3000, () => {
    console.log('Servidor funcionando!')
})