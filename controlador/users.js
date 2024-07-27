import config from "../config.js";
import { db } from "../db.js";
import schema from '../validation/register.js'
import jwt from 'jsonwebtoken'

const getUsuario = async (req, res) => {
    try {
        const credenciales = req.body
        const p = await db.collection('users').findOne({ email: credenciales.email, password: credenciales.password })
        if (p) {
            //
            const payload = {...p}
            const token = jwt.sign(payload, config.LLAVE, {expiresIn: 1200})
            //
            res.send({p, token})
            return ({p, token})
        }
        else {
            res.send(false)
            return false
        }
    }
    catch (error) {
        console.log('login usuario mongo error: ' + error)
        res.send(false)
        return false
    }
}

const registerUsuario = async (req, res) => {
    try {
        const newUsuario = { ...req.body }
        await schema.schemaRegister.validateAsync(newUsuario)
        await db.collection('users').insertOne(newUsuario)
        res.send(newUsuario)
    }
    catch (error) {
        res.send(false)
        console.log('register usuario mongo error: ' + error)
    }
}
export default {
    getUsuario,
    registerUsuario
}