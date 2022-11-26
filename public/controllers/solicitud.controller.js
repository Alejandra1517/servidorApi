
const Solicitud = require('../models/solicitud.model')


const getSolicitud = async (req,res) => {

    const buscarSolicitud = await Solicitud.find()

    res.json({

        "ok":200,
        buscarSolicitud

    })




}



const postSolicitud = async (req,res) => {

    const solicitud = req.body

    const guardarSolicitud = new Solicitud()

    await guardarSolicitud.save()


    res.json({

        "ok":200,
        "msg": "la solicitud fue agregado correctamente"

    })


}


const putSolicitud = async (req,res) => {

    const id = req.params.id
    const solicitud = req.body

    const modificarSolicitud = await Solicitud.findByIdAndUpdate(id,solicitud)


    res.json({

        "ok":200,
        "msg": "la solicitud fue modificado correctamente"

    })


}


const deleteSolicitud = async (req,res) => {

    const id = req.params.id

    const modificarSolicitud = await Cliente.findByIdAndDelete(id)


    res.json({

        "ok":200,
        "msg": "la solicitud fue eliminado correctamente"

    })


}

module.exports = {

    getSolicitud,
    postSolicitud,
    putSolicitud,
    deleteSolicitud


}