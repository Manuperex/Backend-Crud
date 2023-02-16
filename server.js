const express = require('express');
const app = express();
const cors =require('cors');

const corsOption={
    origin:"*",
    method:["GET", "POST", "PUT", "DELETE"],
    allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true
  };
  
app.use(cors(corsOption));
//Import connection mongoDB
const archivoBD = require('./Connection')

//Importacion del archivo de rutas y modelo movies
const rutamovie = require('./Ruta/movies')

//body parser

const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/movie', rutamovie);


//configure the basic server
app.listen(5000, () => {
    console.log('El servidor Nodemon esta corriendo correctamente')
})