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

// del api
myapp.delete('/deleterecord/:id', async(req,res)=>{
    const {id} = req.params;
    await mydatapattern.findByIdAndDelete({_id:id})
    res.status(200).json({message:'selected data removes'})
    })

//login api
myapp.post('/userlogin', async(req,res)=>{
    const{email,pass} = req.body
    const userrecord = await mydatapattern.findOne({email:email})
    if(userrecord){
        if(userrecord.email==email && userrecord.pass==pass){
            res.status(200).json({message:"successfully login",status:240})
        }else{
          res.status(200).json({message:"user and password not match",status:680});
        }
    }else{
      res.status(200).json({message:"user not find",status:420});
    }
})


// view simgle user record api 
myapp.get('/singleuserrecoed/:id', async(req,res)=>{
    const {id} = req.params;
    const singleuser = await mydatapattern.findById({_id:id})
    res.status(200).json({message:'single user data',status:255,mydata:singleuser})
    console.log(singleuser)
})

// update user api 
myapp.patch('/userupdate/:id', async(req,res)=>{
    const {id} = req.params
    const eduser = await mydatapattern.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json({message:'update user',status:251,mydata:eduser})
    })




module.exports = myapp