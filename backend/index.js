const express = require('express')
const connect = require('./db/connect')
const cors = require('cors');
const admin = require('./routes/adminRoute')
const tools = require('./routes/tools')
const seeds = require('./routes/seeds')
const contactus = require('./routes/contactus')
const errorMiddleware = require('./middleware/error')
const cookieParser = require('cookie-parser')

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });
  
const app = express()
require('dotenv').config()



// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api/v1/admin',admin)
app.use('/api/v1/tools',tools)
app.use('/api/v1/seeds',seeds)
app.use('/api/v1/contactus',contactus)

// middleware for error
app.use(errorMiddleware)

const port = 5000 || process.env.PORT 

const server = app.listen(port, () => {
    connect()
    console.log(`Server is working on http://localhost:${port}`);
  });
  
  // Unhandled Promise Rejection
  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });