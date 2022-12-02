const express = require('express')
const router = express.Router()
const CONTACTUS = require('../models/contactus')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ErrorHandler = require('../utils/errorhander')


// CREATE
router.post('/',catchAsyncErrors(async(req,res)=>{
    const contactus = new CONTACTUS(req.body)

        const savedcontactus = await contactus.save()
        res.status(200).json(savedcontactus);
}))

// READ
router.get('/',catchAsyncErrors(async(req,res)=>{
    
        const contactus = await CONTACTUS.find()
        res.status(200).json(contactus);
}))

// DELETE   
router.delete('/:id',catchAsyncErrors(async(req,res,next)=>{

        const contactus = await CONTACTUS.findById(req.params.id)
    if(!contactus){
        return next(new ErrorHandler("Not Found",404))
    }
    
        await CONTACTUS.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted successfully")
}))

module.exports = router