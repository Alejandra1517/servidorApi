const { Router } = require('express')

const { getCliente, postCliente, putCliente, deleteCliente } = require('../controllers/clientes.controller')



const router = Router()


router.get('', getCliente)
router.post('', postCliente)
router.put('/:id', putCliente)
router.delete('/:id', deleteCliente)


module.exports = router