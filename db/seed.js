const Gorcery = require('../models/Gorcery')
const Receipe = require('../models/Receipe')

Gorcery.find({}).remove(() =>{
    Receipe.find({}).remove(()=>{
        let 
    })
})