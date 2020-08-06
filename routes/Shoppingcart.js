const express = require ('express')
const router = express.Router()

const {index,create,update,destroy} = require('../controllers/Shoppingcart.js')

router.get("/",index);
router.post("/",create);
router.put("/:name",update);
router.delete("/:id",destroy);


module.exports= router