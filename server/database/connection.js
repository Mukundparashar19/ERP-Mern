const mongoose = require('mongoose')
const url = process.env.DATABASE

mongoose.connect(url).then(()=>{
    console.log('database is connected');
    }).catch((error)=>{
      console.log(error);      
    })

    module.exports = mongoose