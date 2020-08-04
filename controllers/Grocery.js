const db = require('../db/connection.js');
const Shoppingcart = require("../models/Shoppingcart.js")
const Grocery = require("../models/Grocery.js")

const index = async (req,res) => {
    try {
        const allGrocery = await Grocery.find({})
        res.status(200).json(allGrocery)
    }catch (error){
        res.status(400).json(error)
    }
    
} 

const create = async (req, res) => {
    try {
        console.log("Hello",req.body)
        const newGrocery = await Grocery.create(req.body)
        console.log(newGrocery)
        res.status(201).json(newGrocery)
    } catch(error) {
        res.status(400).json(error)
    }}
   
    const update = async (req,res) => {
        try {
            const updatedGrocery= await Grocery.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.status(200).json(updatedGrocery)
        } catch(error) {
            res.status(400).send(error)
        }
    }
    const destroy = async (req,res) => {
        try {
            const deletedGrocery = await 
            Grocery.findByIdAndDelete(req.params.id);
            const allGrocery = await Grocery.find({})
            res.status(200).json(allGrocery);
        } catch(error) {
            res.status(400).send(error)
        }
    };
   
    module.exports = {index,create,update,destroy}

