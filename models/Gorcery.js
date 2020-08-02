const mongoose = require("../db/connection");
const cookbooks = require("./Receipe");

const { Schema } = require("mongoose")


const GorcerySchema = new Schema({
    Name: String,
    Price : Number,
    cookbooks: [{type:Schema.Types.ObjectId, ref: "receipe"}],
},
{timestamps:true}
);

const Gorcery = mongoose.model('Gorcery',GorcerySchema);
module.exports= Gorcery;
