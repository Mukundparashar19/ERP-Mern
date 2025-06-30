const express = require('express')
const cors = require('cors')
require('dotenv').config();
require('./database/connection')
const port = process.env.PORT || 8000
const myapp = express()

const myrouter = require('./routing/myrouter')
const productrouter = require('./routing/productrouter')

// middleware setup 
myapp.use(cors())  //enable cors first
myapp.use(express.json())   // ensble json second
myapp.use(myrouter)   // register your router after middleware
myapp.use(productrouter) // register your second route

myapp.listen(port,()=>{
    console.log(`server is running at: ${port}`);
    })

    