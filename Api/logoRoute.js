const logoRoute=require('express').Router();
const logoOperation=require('../db/Helpers/logoOperation');

logoRoute.post('/uploadLogo',(req,res)=>{
    var fileLogo=req.files;
    console.log('File Data is', fileLogo);
    logoOperation.addLogo(fileLogo,res);
})

logoRoute.post('/deleteLogo',(req,res)=>{
    var fileName=req.body.delete;
    console.log('Delete File name is',fileName);
    logoOperation.removeLogo(fileName,res);
})

logoRoute.post('/updateLogo',(req,res)=>{
    var oldLogo=req.body.oldLogo;
    console.log('Previous Filename in xcel',oldLogo);
    var newLogo=req.body.newLogo;
    console.log('Update File name in xcel',newLogo);
    logoOperation.updateLogo(oldLogo,newLogo,res);

})

logoRoute.post('/example',(req,res)=>{
    if(req.body.pid){
    const excelSchema = require("../db/Models/MulterXcel");
    excelSchema.findById(req.body.pid,(err,doc)=>{
        if(err){
            console.log(err);
            res.json({flag:"F"});
        }else{
            // console.log("DOC IS ",doc);
            doc = JSON.parse(JSON.stringify(doc));
            var picked = (({_id, ProductName, Price }) =>({_id,ProductName,Price}))(doc)
            //  console.log("PICKED IS ",picked);
            res.json({data:picked,flag:"S"});
        }
    })
    }
    
else{
        res.json({flag:"F"});
    }  

})

logoRoute.post('/findItem',(req,res)=>{
    console.log('Product is',req.body.product);
    const xcelSchema=require('../db/Models/MulterXcel');
    const Orders=require('../db/Models/BookOrderSchema');
    xcelSchema.findById(req.body.product,(err,doc)=>{
        if(err){
            console.log('Error in findItem',err);
        }
        else {
            if(doc){
                // console.log('Doc Found',doc);
                res.json()
            }
            else {
                console.log('Doc not found',err)
            }
        }
    })

    Orders.insertMany(req.body.product,(err,doc)=>{
        if(err){
            console.log('ERror in ORders',err);
        }
        else {
            if(doc){
                console.log('Doc created',doc);
                res.json()
            }
            else {
                console.log('Doc not created',err)
            }
        }
    })
   
})

logoRoute.post('/product123',(req,res)=>{
    console.log('asdasdasfaf');
    const xcelSchema=require('../db/Models/MulterXcel');
    xcelSchema.find({},(err,doc)=>{
        if(err){
            console.log('Error in findItem',err);
        }
        else {
            if(doc){
                // console.log('Doc Found',doc);
                res.json({doc});
            }
            else {
                console.log('Doc not found',err)
            }
        }
    })
  
})

module.exports=logoRoute;