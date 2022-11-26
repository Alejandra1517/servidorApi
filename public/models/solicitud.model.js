const { Schema, model } = require('mongoose')


const solicitudModel = Schema({


    idSolicitud:{

        type:Number,

    },


    nombreCliente:{

        type:String,
        required:['El campo es obligatorio!']

    },

    servicios:{

        type:String,
        required:['El campo es obligatorio!']

    },

    descripcion:{

        type:String,
        required:['El campo es obligatorio!']

    },

    catidad:{
        type:Number

    }


})

module.exports = model('solicitud', solicitudModel)

