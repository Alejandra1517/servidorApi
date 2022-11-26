const mongoose = require('mongoose')


const DBmongo = async () => {


    try {
        
        mongoose.connect(process.env.DB_CNN)
        console.log('Conectado exitosamente')

    } catch (error) {
        
        console.log('Error al conectarse con la base de datos ' + error)
    
    }



}

module.exports = {
       
    DBmongo

}