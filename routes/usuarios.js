import { Router } from 'express'
import controlador from '../controlador/users.js'
import { checkToken } from '../controlador/checkToken.js'

const router = Router()

router.post('/login', controlador.getUsuario)
router.post('/register', controlador.registerUsuario)
router.post('/token', checkToken)

export default router