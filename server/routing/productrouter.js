const express = require('express')

const productdatapattern = require('../schimas/productschima')

const myapp = express.Router()

// post product api
myapp.post('/productpage', async(req,res)=>{
    const{brand,category,description,email,mobno,price,productName,servise,shipping,img} = req.body
    const postdata = new productdatapattern({
     brand,category,description,email,mobno,price,productName,servise,shipping,img
    })
    await postdata.save()
    res.status(201).json({data:postdata,status:255,message:'data pushed successfully'})
    // console.log(postdata);
    
})

// GET product data
myapp.get('/allproductlist', async (req,res) => {
    const allproducts = await productdatapattern.find()
        res.status(201).json({allproducts:allproducts,status:220,message:'all product list'})

})



module.exports = myapp