import { Router } from "express";
const router = Router()
import controlador from '../controlador/carrito.js'

router.post('/', controlador.postCarrito)

export default router
