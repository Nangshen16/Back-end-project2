const mongoose = require("../db/connection");
const {Schema,model} = mongoose

const {grocerySchema} = require('./Grocery');

const shoppingCartSchema = new Schema ({

    name: String,
    ingredients:[{type: Schema.Types.ObjectId}]
   
    

    
})

module.exports = model('Shoppingcart',shoppingCartSchema)


