import { Router } from 'express'
const router = Router()
import controlador from '../controlador/mongo.js'

router.get('/:id?',controlador.getProducto)

router.post('/', controlador.postProducto)

router.put('/:id?', controlador.updProducto)

router.delete('/:id?', controlador.delProducto)

export default router