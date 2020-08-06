const db = require('../db/connection.js');
const express = require('express')
const router = express.Router()

const Shoppingcart = require('../models/Shoppingcart')

const index = async (req,res) => {
    try {
        const allShoppingcart = await Shoppingcart.find().populate('ingredients')
        res.status(200).json(allShoppingcart)
    }catch (error){
        res.status(400).json(error)
    }
    
} 

const create = async (req, res) => {
 try {
     const newShoppingcart = await Shoppingcart.create(req.body)
     res.status(201).json(newShoppingcart)
 } catch(error) {
     res.status(400).json(error)
 }}

 const update = async (req,res) => {
     console.log(req.params.name,req.body)
     try {
         const shoppingcart = await Shoppingcart.findOne({name: req.params.name})
         //take the existing shopping cart data
         
         const newData = {
             name: shoppingcart.name,
             //add the selected ingredient to the ingredients list for this cart
             ingredients: shoppingcart.ingredients.concat(req.body)
         }
         const updatedShoppingcart = await Shoppingcart.findOneAndUpdate(shoppingcart.id,newData)
         res.status(200).json(updatedShoppingcart)
     } catch(error) {
         res.status(400).send(error)
     }
 }
 const destroy = async (req,res) => {
     try {
         const deletedShoppingcart = await 
         Shoppingcart.findByIdAndDelete(req.params.id);
         const allShoppingcart = await Shoppingcart.find({})
         res.status(200).json(allShoppingcart);
     } catch(error) {
         res.status(400).send(error)
     }
 };


 module.exports = {index,create,update,destroy}