import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 8080
const STRCNX = process.env.STRCNX 
const BASE = process.env.BASE
const FTP_HOST = process.env.host
const FTP_USER = process.env.user
const FTP_PASSWORD = process.env.password
const LLAVE = process.env.LLAVE

export default{
    PORT,
    STRCNX,
    BASE,
    FTP_HOST,
    FTP_USER,
    FTP_PASSWORD,
    LLAVE
}