const express = require('express')
const mydatapattern = require('../schimas/myschima')

const myapp = express.Router()

myapp.get('/',(req,res)=>{
    res.send('Welscome to express js')
})

myapp.get('/about',(req,res)=>{
    res.send('this os about page')
})


// api  POST
myapp.post('/registorpage', async (req,res)=>{
const{fullname,email,phone,dob,pass,profile} = req.body;


const postdata = new mydatapattern({
    fullname,email,phone,dob,pass,profile
});
if(fullname == '' || email == '' || phone == '' || dob == '' || pass == '' || profile == ''){
res.status(200).json({data:postdata,status:355,message:'input error'})
}
else{

await postdata.save();
res.status(200).json({data:postdata,status:255,message:'data register successfully'})
console.log(postdata);
}

})

// api GET
myapp.get('/allemplist', async(req,res)=>{
    const allemp = await mydatapattern.find() // mongodb command
    res.status(200).json({allemp:allemp,status:220,message:'all emp list'})
    })



module.exports = myapp