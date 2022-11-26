
const Cliente = require('../models/cliente.model')


const getCliente = async (req,res) => {

    const buscarCliente = await Cliente.find()

    res.json({

        "ok":200,
        buscarCliente

    })




}



const postCliente = async (req,res) => {

    const cliente = req.body

    const guardarCliente = new Cliente()

    await guardarCliente.save()


    res.json({

        "ok":200,
        "msg": "El cliente fue agregado correctamente"

    })


}


const putCliente = async (req,res) => {

    const id = req.params.id
    const cliente = req.body

    const modificarCliente = await Cliente.findByIdAndUpdate(id,cliente)


    res.json({

        "ok":200,
        "msg": "El cliente fue modificado correctamente"

    })


}


const deleteCliente = async (req,res) => {

    const id = req.params.id

    const modificarCliente = await Cliente.findByIdAndDelete(id)


    res.json({

        "ok":200,
        "msg": "El cliente fue eliminado correctamente"

    })


}

module.exports = {

    getCliente,
    postCliente,
    putCliente,
    deleteCliente


}