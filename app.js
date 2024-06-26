import router from './routes/index.js'
import express from 'express'
import config from './config.js'

const app = express()

app.set('port', process.env.PORT || config.PORT)
app.set('json spaces', 2)

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/productos', router)

const server = app.listen(app.get('port'), ()=>{
    console.log('server listening on port: ', app.get('port'))
})

server.on('error', error=> console.log('Error en servidor:' + error.message))