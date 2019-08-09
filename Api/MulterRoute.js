const multerRoute=require('express').Router();
const multerOperation=require('../db/Helpers/MulterOperation');
const Products = require("../db/Models/MulterXcel");


multerRoute.post('/upload', (req,res)=>{
    var fileName=req.files;
    console.log('File Data is', fileName);
    multerOperation.addImage(fileName,res);
})

multerRoute.post('/uploadAdv', (req,res)=>{
    var fileAd=req.files;
    console.log('File Data is', fileAd);
    multerOperation.addAdv(fileAd,res);
})

multerRoute.post('/uploadAdv3', (req,res)=>{
    var fileAd3=req.files;
    console.log('File Data is', fileAd3);
    multerOperation.addAdv3(fileAd3,res);
})

multerRoute.post('/delete',(req,res)=>{
    var fileName=req.body.delete;
    console.log('Delete File name is',fileName);
    multerOperation.removeImage(fileName,res);
})
multerRoute.post('/update',(req,res)=>{
   var image1=req.body.image1;
    console.log('Previous Filename in xcel',image1);
    var filename=req.body.update;
    console.log('Update File name in xcel',filename);
    multerOperation.updateImage(image1,filename,res);
})

multerRoute.get('/EmptyCart',(req,res)=>{
    res.render('EmptyCart',{
        cart:global.sheetMenu
    });
})

multerRoute.get('/index',(req,res)=>{
    res.render('index');
})

multerRoute.get('/Jackets',(req,res)=>{
    res.render('Jackets',{
        grid:global.sheetMenu,
        ItemDesc:global.sheetProduct
    });
})

multerRoute.get('/Jackets/:id',(req,res)=>{
    var id=req.params.id;
    Products.findOne({Id:id},(err,doc)=>{
        if(err){ 
            res.render("error",{error:{msg:"Error in find"}})
        }
        else if(doc){
            console.log(doc);
            res.render("JacketId",{Item1:JSON.parse(JSON.stringify([doc])),products:global.sheetMenu})
        }
        else{
            res.render("error",{error:{msg:"404 not found"}});
        }
    })

 })
module.exports=multerRoute; 
