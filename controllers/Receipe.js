const db = require('../db/connection.js');
const express = require('express')
const router = express.Router()

const Receipe = require('../models/Receipe')

const index = async (req,res) => {
    try {
        const allReceipes = await Receipe.find().populate('Gorcery')
        res.status(200).json(allReceipes)
    }catch (error){
        res.status(400).json(error)
    }
    
} 

const create = async (req, res) => {
 try {
     const newReceipe = await Receipe.create(req.body)
     res.status(201).json(newReceipe)
 } catch(error) {
     res.status(400).json(error)
 }}

 const update = async (req,res) => {
     try {
         const updatedReceipes= await Receipe.findByIdAndUpdate(req.params.id,req.body,{new:true})
         res.status(200).json(updatedReceipes)
     } catch(error) {
         res.status(400).send(error)
     }
 }
 const destroy = async (req,res) => {
     try {
         const deletedReceipes = await 
         Receipe.findByIdAndDelete(req.params.id);
         const allReceipes = await Receipe.find({})
         res.status(200).json(allReceipes);
     } catch(error) {
         res.status(400).send(error)
     }
 };

 module.exports = {index,create,update,destroy}