const db = require('../db/connection.js');
const rece = require("../models/Receipe.js")
const Gorcery = require("../models/Gorcery.js")

const index = async (req,res) => {
    try {
        const allGorceries = await Receipe.find().populate('')
        res.status(200).json(allGorcery)
    }catch (error){
        res.status(400).json(error)
    }
    
} 

const create = async (req, res) => {
    try {
        const newGorcery = await Gorcery.create(req.body)
        res.status(201).json(newGorcery)
    } catch(error) {
        res.status(400).json(error)
    }}
   
    const update = async (req,res) => {
        try {
            const updatedGorcery= await Gorcery.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.status(200).json(updatedGorcery)
        } catch(error) {
            res.status(400).send(error)
        }
    }
    const destroy = async (req,res) => {
        try {
            const deletedGorcery = await 
            Receipe.findByIdAndDelete(req.params.id);
            const allGorcery = await Gorcery.find({})
            res.status(200).json(allGorcery);
        } catch(error) {
            res.status(400).send(error)
        }
    };
   
    module.exports = {index,create,update,destroy}

