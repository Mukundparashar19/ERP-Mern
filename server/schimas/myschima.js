const mongoose = require('mongoose')

const mydatapattern = mongoose.Schema({
    fullname:String,
    email:String,
    email:String,
    phone:String,
    dob:String,
    pass:String,
    profile:String,

})


const myschimatype = mongoose.model('userregistor',mydatapattern)

module.exports = myschimatype