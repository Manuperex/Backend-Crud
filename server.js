const express = require('express');
const app = express();
const cors =require('cors');


//Import connection mongoDB
const archivoBD = require('./Connection')

//Importacion del archivo de rutas y modelo movies
const rutamovie = require('./Ruta/movies')

//body parser

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api/movie', rutamovie);


app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend node.js corriendo...')
})


//configure the basic server
app.listen(5000, () => {
    console.log('El servidor Nodemon esta corriendo correctamente')
})