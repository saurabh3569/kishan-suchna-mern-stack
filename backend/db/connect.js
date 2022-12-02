const mongoose = require('mongoose');
require('dotenv').config()
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

 
const connect = catchAsyncErrors(async() => {

        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
          console.log(`connected to backend at ${process.env.PORT}`);
        })
}) 

  
module.exports = connect   