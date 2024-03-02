const express = require('express');
const dbconnet = require('./config');
const app = express()


app.listen(3001, () => {
    console.log('El servidor esta en el puerto 3000');
})

dbconnet();