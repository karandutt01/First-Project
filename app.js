const express=require('express');
const app=express();
const path = require('path');
const cookie=require('cookie-session');
const multer  = require('multer')
const GoogleStrategy=require('./utils/google-OAuth');
const passport=require('passport');
const bodyParser=require('body-parser');

app.use(express.static('public'));
app.use(require("./utils/cors"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookie({
  maxAge:24*60*60*1000,
  keys:['asdasdasd']
}))

app.set('view engine','ejs');
app.set('views', path.join(__dirname+'/public/views'));

app.use('/',require('./Api/googleRoute'));

app.use('/',require('./Api/userRoute'));
app.use('/',require('./Api/dashboardRoute'));

// app.use(require('./utils/tokenmiddleware'));

app.use(require('./utils/multerads'));
app.use('/',require('./Api/MulterRoute'));

app.use(require('./utils/multerAdvts'));
app.use('/',require('./Api/MulterRoute'));

app.use(require('./utils/multerAdv3'));
app.use('/',require('./Api/MulterRoute'));


app.use('/', require('./utils/multermenu'));
app.use('/',require('./Api/ExcelRoute'));

app.use('/', require('./utils/multerProducts'));
app.use('/',require('./Api/ExcelRoute'));


// app.get('/',(req,res)=>{
//     res.sendFile('index',{menu:global.sheetMenu});
// })

app.use('/',require('./utils/multerLogo'));
app.use('/', require('./Api/logoRoute'));

app.listen(process.env.PORT||1234,()=>{
    console.log('Server Created...........');

          const MulterXcel=require('./db/Models/MulterXcel');
          MulterXcel.find({},(err,doc)=>{
            if(err){
              res.status(500).json({status:config.status.ERROR, msg:'error during finding excel doc in db'});
            }
            else{ 
              if(doc.length){

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
                      // console.log('Result of Global sheetMEnu', global.sheetMenu);s
                  }
                }
              )}
            }
          })

                  const MulterXcel2=require('./db/Models/MulterXcel');
                  MulterXcel2.find({},(err,doc)=>{
                    if(err){
                      res.status(500).json({status:config.status.ERROR, msg:'error during finding excel doc in db'});
                    }
                    else{ 
                      if(doc.length){
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
                          }
                        )}
    const userOperation=require('./db/Helpers/userOperations');
    const config=require('./utils/config');
    userOperation.findAdmin({userid:config.Admin});
    }
  })
})
