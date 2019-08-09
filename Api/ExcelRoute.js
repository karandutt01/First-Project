const ExcelRoute=require('express').Router();
const multerXclopr=require('../db/Helpers/MulterXcelOprtn');

ExcelRoute.post('/uploadxcelProduct', (req,res)=>{
  var fileupload=req.files;
  console.log(fileupload);
    xlsxj = require("xlsx-to-json");
    xlsxj({
      
        input:'C:/Users/hp/Desktop/Seller Excel File.xlsx' , 
        output: null
      }, function(err, result) {
        if(err) {
          console.error(err);
        }else {
          console.log('Inside xlsx to json');
          global.sheetProduct=result;
          // console.log('Result of Global sheetProduct', global.sheetProduct);
        }
        multerXclopr.addXcelProducts(result,fileupload,res);
      })
  })


  ExcelRoute.post('/uploadxcelMenu',(req,res)=>{

    var file=req.files;
    console.log(file);
    xlsxj = require("xlsx-to-json");
    xlsxj({
      
        input:'C:/Users/hp/Desktop/karan.xlsx' , 
        output: null
      }, function(err, result2) {
        if(err) {
          console.error(err);
        }else {
          console.log('Inside xlsx to json');
          global.sheetMenu=result2;
          // console.log('Result of Global sheetMEnu', global.sheetMenu);
        }
        multerXclopr.addXcelMenu(result2,file,res);
      })
  })
    // var XLSX = require('xlsx');
    // const path = require('path');
    // let filePath = path.join(__dirname,'..','public','excel','menu.xlsx');
    // const fs = require("fs"); // Or `import fs from "fs";` with ESM
    // var workbook;
    // if (fs.existsSync(filePath)) {
    //     workbook = XLSX.readFile(filePath);
    //     global.publicMenu = workbook.Sheets.Sheet1;
    //     // console.log('excel file data',workbook.Sheets.Sheet1);
    // }
    // res.status(200).json({status:config.status.SUCCESS, msg:'Excel uploaded Successfully'})

ExcelRoute.get('/product',(req,res)=>{
    res.render('product',{
        products:global.sheetMenu,
        ItemDesc:global.sheetProduct

    })
})

module.exports=ExcelRoute;