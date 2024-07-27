import joi from "joi";

const schemaRegister = joi.object({
    "name":joi.string().required().min(3),
    "email":joi.string().required().email(),
    "domicilio":joi.string().required().min(3),
    "password":joi.string().required().min(5),
})

export default{
    schemaRegister
}