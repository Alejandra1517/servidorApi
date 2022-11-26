const { Schema, model } = require('mongoose')


const clienteModel = Schema({


    idCliente:{

        type:Number,

    },


    nombreCliente:{

        type:String,
        required:['El campo es obligatorio!']

    },

    documento:{

        type:String,
        required:['El campo es obligatorio!']

    },

    telefono:{
        type:Number,
        required:['El campo es obligatorio!']

    },

    direccion:{
        type:String,
        required:['El campo es obligatorio!']

    },

    estado:{
        type:Boolean,
        required:['El campo es obligatorio!']

    },

    fecha:{

        type:Date,
        required:['El campo es obligatorio!']

    }



})

module.exports = model('cliente', clienteModel)