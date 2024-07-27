import { Client } from "basic-ftp"
import config from "../config.js";
import fs from 'fs'
import util from 'util'

const renombrar = util.promisify(fs.rename)

export const uploadFTP = async file=>{
    const client = new Client()
    client.ftp.verbose = false
    try{
        await client.access({
            host:config.FTP_HOST,
            user:config.FTP_USER,
            password:config.FTP_PASSWORD,
            secure:false
        })
        const path =  file
        await client.uploadFrom(path,`public_html/uploads/${file.split('/')[2]}`)

        await fs.promises.unlink(path) //Borra el archivo despues de subirlo online
    }
    catch(error){
        console.log('error en uploadFTP: ' + error)
    }
    client.close()
    return `https://battlemented-bunks.000webhostapp.com/uploads/${file.split('/')[2]}`
}

const saveImage=async file=>{
    const now = Date.now()
    const newPath = `./uploads/${now}-${file.originalname}`
    try{
        await renombrar(file.path, newPath)
    }
    catch(error){
        console.log(error)
    }
    return `./uploads/${now}-${file.originalname}`
}
const uploadImage= async (req, res)=>{
    const newPath = await saveImage(req.file)
    const ftpPath = await uploadFTP(newPath)
    res.send(ftpPath)
}

export default {
    uploadImage
}