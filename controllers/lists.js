const express = require('express');
const List = require('../models/list');
const listRouter = express.Router();


//INDUCES
// -- new goes
// -- edit
//CRUD

//Create

listRouter.post('/',async  (req, res) => {
    try {
        const newListPost = await List.create(req.body);

        res.status(200).json(newListPost)

    } catch (e) {
        res.json(e)
    }
})

//Read
/* Index */
listRouter.get('/', async (req, res) => {
    try {
        const foundLists = await List.find({})
        res.status(200).json(foundLists)

    } catch (e) {
        res.status(400).json(e)


    }
})
/* Show */
listRouter.get('/:id', async (req, res) => {
    try {
        const foundList = await List.findById(req.params.id)
        res
          .status(200)
          .json(foundList)
    } catch (e) {
        res 
          .status(400)
          .json(e)
    }
})



//Destroy
listRouter.delete('/:id', async (req, res) => {
    try {
        const foundList = await List.findByIdAndDelete(req.params.id);
        res.status(200).json(foundList);

    } catch (e) {
        res.status(400).json(e)
    }
})

//Update
listRouter.put('/:id', async (req, res) => {
    try {
        const foundList = await List.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(foundList);

    } catch (e) {
        res.status(400).json(e)
    }
})

module.exports = listRouter;