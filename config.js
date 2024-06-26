import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3000
const STRCNX = process.env.STRCNX 
const BASE = process.env.BASE

export default{
    PORT,
    STRCNX,
    BASE
}