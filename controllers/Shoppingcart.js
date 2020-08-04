const db = require('../db/connection.js');
const express = require('express')
const router = express.Router()

const Shoppingcart = require('../models/Shoppingcart')

const index = async (req,res) => {
    try {
        const allShoppingcart = await Shoppingcart.find()
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
     try {
         const updatedShoppingcart= await Shoppingcart.findByIdAndUpdate(req.params.id,req.body,{new:true})
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