const express = require('express')
const router = express.Router()
const SEEDS = require('../models/seeds')
const ErrorHandler = require('../utils/errorhander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const { isAuthenticatedAdmin } = require('../middleware/auth')


// CREATE
router.post('/',catchAsyncErrors(async(req,res)=>{
    const seed = new SEEDS(req.body)
    
        const savedseed = await seed.save()
        res.status(200).json(savedseed);
}))

// READ
router.get('/',catchAsyncErrors(async(req,res)=>{
    
        const seed = await SEEDS.find()
        res.status(200).json(seed);
}))

// UPDATE
router.put('/:id',catchAsyncErrors(async(req,res,next)=>{
    
    const seed = await SEEDS.findById(req.params.id)
    if(!seed){
        return next(new ErrorHandler("Not Found",404))
    }

        const updatedseed = await SEEDS.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedseed)
}))

// DELETE    
router.delete('/:id',catchAsyncErrors(async(req,res,next)=>{

    const seed = await SEEDS.findById(req.params.id)
    if(!seed){
        return next(new ErrorHandler("Not Found",404))
    }

        await SEEDS.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted successfully")
}))

module.exports = router