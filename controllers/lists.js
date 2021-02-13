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
        const newlistPost = await List.create(req.body);

        res.status(200).json(newlistPost)

    } catch (e) {
        res.json(e)
    }
})

//Read
/* Index */
listRouter.get('/', async (req, res) => {
    try {
        const foundlists = await List.find({})
        res.status(200).json(foundlists)

    } catch (e) {
        res.status(400).json(e)


    }
})
/* Show */
listRouter.get('/:id', async (req, res) => {
    try {
        const foundlist = await List.findById(req.params.id)
        await foundlist.execPopulate('comments')
        res
          .status(200)
          .json(foundlist)
    } catch (e) {
        res 
          .status(400)
          .json(e)
    }
})



//Destroy
listRouter.delete('/:id', async (req, res) => {
    try {
        const foundlist = await List.findByIdAndDelete(req.params.id);
        res.status(200).json(foundlist);

    } catch (e) {
        res.status(400).json(e)
    }
})

//Update
listRouter.put('/:id', async (req, res) => {
    try {
        const foundlist = await List.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(foundlist);

    } catch (e) {
        res.status(400).json(e)
    }
})

module.exports = listRouter;