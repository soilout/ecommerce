import { /* MongoClient, */ ObjectId } from "mongodb"
import { db } from "../db.js"


const getProducto = async (req, res) => {
    try {
        const id = req.params.id
        let p
        if(id){
            p = await db.collection('Productos').findOne({_id: ObjectId.createFromHexString(id)})
        }
        else  p = await db.collection('Productos').find({}).toArray()
        res.send(p)
    }
    catch(error) {
        console.log('error: '+ error)
    }
}

const postProducto = async (req, res) => {
    try {
        const newProducto = {...req.body}
        await db.collection('Productos').insertOne(newProducto)
        res.send(newProducto)
    }
    catch(error) {
        console.log('error: '+ error)
    }
}

const delProducto = async (req, res) => {
    try {
        const id = req.params.id
        await db.collection('Productos').deleteOne({_id: ObjectId.createFromHexString(id)})
        res.send('')
    }
    catch(error) {
        console.log('error: '+ error)
    }

}

const updProducto = async (req, res) => {
    try {
        const newProducto = {...req.body}
        const id = req.params.id
        await db.collection('Productos').updateOne({_id: ObjectId.createFromHexString(id)}, {$set: newProducto})
        res.send(newProducto)
    }
    catch(error) {
        console.log('error: '+ error)
    }
}

export default {
    getProducto,
    postProducto,
    delProducto,
    updProducto
}