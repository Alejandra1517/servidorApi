const { Router } = require('express')

const { getSolicitud, postSolicitud, putSolicitud, deleteSolicitud } = require('../controllers/solicitud.controller')



const router = Router()


router.get('', getSolicitud)
router.post('', postSolicitud)
router.put('/:id', putSolicitud)
router.delete('/:id', deleteSolicitud)


module.exports = router