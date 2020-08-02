const mongoose = require("../db/connection");
const {Schema,model} = mongoose


const ingredientSchema= new Schema({
    name: String,
    price: Number
})
const receipeSchema = new Schema ({

    name: String,
    ingerdients: [ingredientSchema]
    
})

module.exports = model('Receipe',receipeSchema)


