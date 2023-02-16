const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema

const schemamovie = new schema({
    title: String,
    year: String,
    time: String,
    idmovie: String
})

const ModelMovies = mongoose.model('movies', schemamovie);
module.exports = router;

// router.get('/ejemplo', (req, res) => {
//     res.end('saludo carga desde ruta ejemplo');
// })

//agregar usuario

router.post('/agregarmovie', (req, res) => {
    const nuevamovie = new ModelMovies({
        title: req.body.title,
        year: req.body.year,
        time: req.body.time,
        idmovie: req.body.idmovie
    })
    nuevamovie.save(function(err) {
        if(!err){
            res.send('Usuario agregado correctamente');
        } else {
            res.send(err);
        }
    })
})

//obtener todos los usuarios

router.get('/obtenermovies', (req, res) => {
    ModelMovies.find({}, function(docs, err){
        if(!err){
            res.send(docs);
        } else {
            res.send(err);
        }
        res.json(docs)
    })

})

//obtener data de usuario

router.post('/obtenerdatamovie', (req, res) => {
    ModelMovies.find({idmovie:req.body.idmovie}, function(docs, err){
        if(!err){
            res.send(docs);
        } else {
            res.send(err);
        }
    })

})

// actualizar movie
router.post('/actualizarmovie', (req, res) => {
    ModelMovies.findOneAndUpdate({idmovie:req.body.idmovie},{
        title: req.body.title,
        year: req.body.year,
        time: req.body.time
    }, (err) => {
        if(!err){
            res.send('Usuario actualizado correctamente');
        } else {
            res.send(err);
        }
    })
})

//Elimnar usuario
router.post('/borrarmovie', (req, res) => {
    ModelMovies.findOneAndDelete({idmovie:req.body.idmovie}, (err) =>{
        if(!err){
            res.send('Movie borrado correctamente');
        } else {
            res.send(err);
        }
    })
})

