const express = require('express')
const router = express.Router()
const ADMIN = require('../models/admin')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ErrorHandler = require('../utils/errorhander')
const sendToken = require('../utils/jwtToken')
const { isAuthenticatedAdmin } = require('../middleware/auth')

// CREATE ADMIN
router.post('/register',catchAsyncErrors(async(req,res,next)=>{

        const {name,email,password} = req.body

    const admin = await ADMIN.create({
        name,email,password,
        avatar:{
                public_id:"sample",
                url:"me"
        }
    })

    sendToken(admin,200,res)

}))

// LOGIN ADMIN
router.post('/login',catchAsyncErrors(async (req, res, next) => {
        const { email, password } = req.body;
      
        // checking if user has given password and email both
      
        if (!email || !password) {
          return next(new ErrorHandler("Please Enter Email & Password", 400));
        }
      
        const admin = await ADMIN.findOne({ email }).select("+password");
      
        if (!admin) {
          return next(new ErrorHandler("Invalid email or password", 401));
        }
      
        const isPasswordMatched = await admin.comparePassword(password);
      
        if (!isPasswordMatched) {
          return next(new ErrorHandler("Invalid email or password", 401));
        }
      
        sendToken(admin,200,res)
 }))

 // Logout Admin
 router.get('/logout',catchAsyncErrors(async (req, res, next) => {
        res.cookie("token", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
        });
      
        res.status(200).json({
          success: true,
          message: "Logged Out",
        });
 }))


// GET ALL ADMIN
router.get('/getall',catchAsyncErrors(async(req,res)=>{
    
        const admin = await ADMIN.find()
        res.status(200).json(admin)
}))

// GET ONE ADMIN
router.get('/:id',isAuthenticatedAdmin,catchAsyncErrors(async(req,res)=>{
    
        const admin = await ADMIN.findById(req.params.id)
        res.status(200).json(admin)
}))

// DELETE ADMIN
router.delete('/:id',isAuthenticatedAdmin,catchAsyncErrors(async(req,res,next)=>{
    
        const admin = await ADMIN.findById(req.params.id)
        if(!admin){
                return next(new ErrorHandler("Not Found",404))
        }
        const updatedAdmin = await ADMIN.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted");
    
}))

// UPDATE ADMIN 
router.put('/:id',isAuthenticatedAdmin,catchAsyncErrors(async(req,res,next)=>{

        const admin = await ADMIN.findById(req.params.id)
        if(!admin){
                return next(new ErrorHandler("Not Found",404))
        }
        const updatedAdmin = await ADMIN.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedAdmin);
    
}))



module.exports = router