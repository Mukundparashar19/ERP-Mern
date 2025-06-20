const express = require('express')
const cors = require('cors')
require('dotenv').config();
require('./database/connection')
const port = process.env.PORT || 8000
const myapp = express()

const myrouter = require('./routing/myrouter')

// middleware setup 
myapp.use(express.json())
myapp.use(myrouter)
myapp.use(cors)

myapp.listen(port,()=>{
    console.log(`server is running at: ${port}`);
    })