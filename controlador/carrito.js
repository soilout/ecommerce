const postCarrito=async(req, res)=>{
    console.log(req.body)
    res.send('carrito enviado')
}

export default {
    postCarrito
}