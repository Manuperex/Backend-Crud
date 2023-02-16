const mongoose = require('mongoose');

const user="manuperex";
const password='Manunel2421.';
const dbname='VideoClub';

const url = `mongodb+srv://${user}:${password}@cluster0.wteqvii.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(url);

const objectdb = mongoose.connection;

objectdb.on ('connected', () => {console.log('conexion correcta a MongoDB')});
objectdb.on ('error', () => {console.log('Error en la conexion a MongoDB')});


module.exports = mongoose

