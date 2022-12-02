const express = require('express')
const router = express.Router()
const TOOLS = require('../models/Tools')
const ErrorHandler = require('../utils/errorhander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const { isAuthenticatedAdmin } = require('../middleware/auth')


// CREATE
router.post('/',catchAsyncErrors(async(req,res)=>{
    const tools = new TOOLS(req.body)

        const savedtools = await tools.save()
        res.status(200).json(savedtools);
    
}))

// READ
router.get('/',catchAsyncErrors(async(req,res)=>{
    
        const tools = await TOOLS.find()
        res.status(200).json(tools);
}))

// UPDATE
router.put('/:id',catchAsyncErrors(async(req,res,next)=>{
    
    const tools = await TOOLS.findById(req.params.id)
    if(!tools){
        return next(new ErrorHandler("Not Found",404))
    }
        const updatedtools = await TOOLS.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedtools);
}))


// DELETE   
router.delete('/:id',catchAsyncErrors(async(req,res,next)=>{

    const tools = await TOOLS.findById(req.params.id)
    if(!tools){
        return next(new ErrorHandler("Not Found",404))
    }
    
        await TOOLS.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted successfully")
}))

module.exports = router