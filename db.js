import { MongoClient} from "mongodb"
import config from './config.js'

export let db

try{
    console.log('----- Tratando conectarse -----')
    const client = new MongoClient(config.STRCNX)
    await client.connect()
    console.log('>>>>> Base de datos conectada <<<<<')
    db = client.db(config.BASE)
}
catch(error){
    console.log('error: ' + error)
}