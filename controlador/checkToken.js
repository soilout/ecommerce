import config from '../config.js'
import jwt from 'jsonwebtoken'

export const checkToken = (req, res) =>{
    const body = {...req.body}
    const token = Object.keys(body)[0]
    const d = jwt.decode(token)
    if(token){
        jwt.verify(token, config.LLAVE, (error, decoded)=>{
            if(error){
                res.send(false)
            }
            else{
                const respuesta = {email:d.email, name:d.name}
                res.send(respuesta)
            }
        })
    }
    else{

    }
}