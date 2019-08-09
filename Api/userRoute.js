const userRoute=require('express').Router();
const userOperation=require('../db/Helpers/userOperations');

userRoute.post('/register', (req, res)=>{
    var userid=req.body.userid;
    console.log('userid is', userid);
    var pwd=req.body.password;
    console.log('passowrd is', pwd);
    var userObj={'userid':userid, 'password': pwd};
    userOperation.create(userObj,res);

})

userRoute.post('/login', (req, res)=>{
    var userid=req.body.userid;
    console.log('userid is', userid);
    var pwd=req.body.password;
    console.log('password is', pwd);
    var userObj={'userid':userid, 'password': pwd};
    userOperation.find(userObj,res);
    
})

userRoute.get('/isFirstTime', (req,res)=>{
    userOperation.FindFirstTime(res);
})

userRoute.post('/changepass', (req,res)=>{
    var currentPassword = req.body.currentpassword;
    var newPass=req.body.newpassword;
    console.log('New Password is', newPass);
    var confirmPass=req.body.confirmpassword;
    console.log('Confirm Passowrd is', confirmPass);
    var changePassObj={newpassword:newPass, confirmpassword:confirmPass,currentpassword:currentPassword}
    userOperation.findOneAndUpdate(changePassObj,res);
})

userRoute.get('/search',(req,res)=>{
    var search=req.query.search
    console.log('search input tag',search)
    userOperation.getSearch(search,res)
})

userRoute.get('/checkout',(req,res)=>{
    res.render('checkout',{
        Item:global.sheetMenu,
        ItemDesc:global.sheetProduct
    });
})

userRoute.get('/BookItem',(req,res)=>{
    res.render('BookItem');
// userOperation.bookOrder(res)
    
})
module.exports=userRoute;