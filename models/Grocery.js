//const mongoose = require("../db/connection");
//const  = require("./Shoppingcart");
const mongoose = require('mongoose')

const { Schema } = require("mongoose")

const grocerySchema = new Schema({
    Name: String,
    Price : Number,
    /*Vegetrian: Boolean,
    Paleo : Boolean,
    Low-carb : Boolean,
    Keto : Boolean*/
},

  {timestamps:true}
)
const Grocery = mongoose.model('Grocery',grocerySchema);
module.exports= Grocery

