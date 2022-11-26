const express = require('express')

const cors = require('cors')

const  DBmongo  = require('../public/models/cliente.model')

class Server  {


    constructor(){

        this.app = express()
        this.port = process.env.port


        this.DBconection()

        this.middlewares()

        this.routes()



    }


    DBconection(){

        DBmongo()

    }


    middlewares(){

        this.app.use( cors() )

        this.app.use( express.json() )

        this.app.use( express.static('public') )


    }

    routes(){

        this.app.use('/api/cliente', require('../public/routes/cliente.routes'))
        this.app.use('/api/solicitud', require('../public/routes/solicitud.routes'))


    }


    listen(){

        this.app.listen(this.port, () => {

            console.log('Servidor corriendo en el puerto ' + this.port)


        })



    }




}


module.exports = Server