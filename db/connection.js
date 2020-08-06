const mongoose = require('mongoose')

mongoose.connect(process.env.mongoURI + "Ecommerce", { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose
