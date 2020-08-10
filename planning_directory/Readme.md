# Back-end-project2
# project-2-backend
# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|-----|----------------------------------------------| ----------|
|Day 1 - Friday | Pre-work: Project Description                          | Complete
|Day 1 - Friday | Pre-work: Wireframes / Priority Matrix / Timeline      | Complete
|Day 2 - Saturday | Start backend logic                                  | Complete
|Day 3 - Sunday | Complete backend and test                              | Complete

Project Schedule continued in [Frontend](https://github.com/Nangshen16/Front-end-project2)

## Project Description

Link to final [project](https://project2rachel.herokuapp.com/)

Introducing, Our Unit-2 project for General Assembly's SEI program.
     For Project 12, I will be creating a fullstack website for mygorcerystore.
 The backend will include:
  * a Schema for gorceryingredients and shoppingcart.
 * The ability to Create, Read, Update, and Destroy a ingredient or shoppingcart
 
 ## Wireframes for Schemas
```
  ShoppingcartSchema
  {
  Name: String,
    Price : Number
    }
     ingredientSchema
     {
     name: String,
    ingredients:[{type: Schema.Types.ObjectId,ref:"Grocery"}]
    }
    
    ### MVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

*  Create controllers for shoppingCart
    * Read all shoppingCart
   * find shoppingCart by name
   * find shoppingCart by price
   
   * update shoppingCart info
   * create shoppingCart
   * delete shoppingCart
  
* Create controllers for ingredients
   *  Read all ingredients
   * find ingredients by name
   * find ingredients by price
   * Create ingredients
   * Update newingredients
   * delete ingredients
  
  

## Functional Components

I've broken down each part of the backend to smaller tasks below.

#### MVP

| Component                                  | Priority | Estimated Time | Time Invested  | Actual Time |
| ---                                        | :---:    |  :---:         | :---:          | :---:       |
| Initial Setup/ boilerplate code            | H        | 1hr            | .5hr            | -hr         |
| Seed Data                                  | H        | 1hr            | 9hr            | -hr         |
| Create Models for ingredients                | H        | 1hr            | .5hr            | -hr         |
| Create Models for shoppingcart                 | H        | 1hr            | .5hr            | -hr         |
| Create Controller for ingredients            | H        | 1hr            | 1hr            | -hr         |
| Create Controller for shoppingcart              | H        | 1hr            | 15hr            | -hr         |
| Create Routes for ingredients                | H        | 1hr            | .5hr            | -hr         |
| Create Routes for shoppingcart                  | H        | 1hr            | .5hr            | -hr         |
| Test routes for ingredients                   | H        | 2hr            | 2hr            | -hr         |
| Test routes for shoppingcart                   | H        | 2hr            | 2hr            | -hr         |
| Deploy on Heroku                           | H        | 1hr            | 12hr            | -hr         |
| Total                                      |          | 14hrs          | 43.5hr            | -hr         |



## Additional Libraries
 This section lists all supporting libraries and their role in the project.
 * [express](http://expressjs.com/) - A framework for bode that allows users to write handlers for requests with different HTTP verbs at different URL paths (routes)
 * [mongoose](https://mongoosejs.com/docs/2.7.x/index.html) - An Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
 * [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - a node package for providing a [Connect](https://github.com/senchalabs/connect#readme)/[Express](http://expressjs.com/) middleware that can be used to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (cross-origin resource sharing) with various options. It is used for security.
 * [dotenv](https://www.npmjs.com/package/dotenv) - A module that loads environment variables used for configuration
 * [morgan](https://www.npmjs.com/package/morgan) - A HTTP request logger middleware for node.js


## Code Snippet

This section will include a brief code snippet of functionality that I am proud of and a brief description  
const index = async (req,res) => {
    try {
        const allShoppingcart = await Shoppingcart.find().populate('ingredients')
        res.status(200).json(allShoppingcart)
    }catch (error){
        res.status(400).json(error)
    }
    
} 
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
 
 ## Issues and Resolutions
 This section will list all major issues encountered and their resolution.
 
 I was having trouble with creating api and stuck with api for long time and it was very complicated to link api and front end . Creating JQuery was one of my weakest.
 Instead of using //NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions));
I use app.use(cors()) to link api and front end.
