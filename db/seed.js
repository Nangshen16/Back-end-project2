const Grocery = require('../models/Grocery')
const Receipe = require('../models/Receipe')

Grocery.find({}).remove(() =>{
    Receipe.find({}).remove(()=>{
        let 
    })
})

Grocery.create(
    [
        {Name:"Lobster",
        Price:20
    },
         {
             Name: "Cod",
             Price:15
         },
         {
             Name: "Oyster",
             Price: 12
         },
         {
             Name: "Squid",
             Price: 10
         },
         {
             Name: "Branzino",
             Price: 25
         }
         
    ]
)