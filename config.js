//conexion a la base e datos
const mongoose = require('mongoose');


const dbconnet = async () => {  
    try {
        // mongoose.set('strictQuery', true)
        await mongoose.connect('mongodb://127.0.0.1:27017/users-prueba');  
        console.log('conexion exitosa a MongoB');
    }   catch (error) {
        console.log('error de conexion', error.message);
    }
    // manejo de errores con un call back
};

module.exports = dbconnet;
