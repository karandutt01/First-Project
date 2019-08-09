const googleRoute=require('express').Router();
const passport=require('passport');
const googleSchema=require('../db/Models/googleSchema');

googleRoute.get('/google',passport.authenticate('google',{scope:['profile','email']}));
googleRoute.get('/BookOrder',passport.authenticate('google'),(req,res)=>{
  res.render('BookOrder',{
    Item:global.sheetMenu,
    ItemDesc:global.sheetProduct
  });
})
module.exports=googleRoute;