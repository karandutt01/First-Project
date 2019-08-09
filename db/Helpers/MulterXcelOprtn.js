const MulterXcel=require('../Models/MulterXcel');
const MenuSchema=require('../Models/menuSchema');
const config=require('../../utils/config');
const multerOperations={

//     addXcel(filedes,res){
//      MulterXcel.find({},(err,doc)=>{
//         if(err){
//              res.status(500).json({status:config.status.ERROR, msg:'Excel file not found in Db'});
//             }
//         else {
//         if(!doc.length){ // []=>true,[1]=>true.[]=>false,[1]=true
//         console.log("DOC NOT FOUND");
//         MulterXcel.create(filedes,(err,doc)=>{
//         if(err){
//             res.status(500).json({status:config.status.ERROR, msg:'error during creating new excel record'});
//         }
//                 else {
//                     if(doc){
//                     res.status(200).json({status:config.status.SUCCESS, msg:'Added new excel record into db'});
//                     }
//                 else {
//                     res.status(404).json({status:config.status.Fail, msg:'Error in creating new excel record in DB'});
//                 }
//                 }
//             })
//             // res.status(404).json({status:config.status.Fail, msg:'Error in multer Operation'});
//         }else{
//             res.status(200).json({status:config.status.SUCCESS, msg:'Added new excel record into db'});
//         }
//     }

// })
// },

    addXcelMenu(result2,file,res){
        MenuSchema.find({},(err,doc)=>{

        if(err){
            console.log('ERROR in find mehod of mutlteroperation file',err)
            res.status(500).json({status:config.status.ERROR, msg:'Excel Menu file not found in Db'});
        }
        else {

            if(!doc.length) { // []=>true,[1]=>true.[]=>false,[1]=true
                console.log("DOC NOT FOUND");
                MenuSchema.insertMany(result2,file,(err,doc)=>{
        
                    if(err){
                        res.status(500).json({status:config.status.ERROR, msg:'Error during inserting Excel Menu file into Db'});
                    }
        
                    else {
                        if(doc){
                        console.log('Doc is',doc);
                        res.status(200).json({doc}),({status:config.status.SUCCESS, msg:'Excel Menu file added to Db first time'});
                        }
                    else {
                        res.status(404).json({status:config.status.Fail, msg:'Error in multer Operation'});
                    }
                }
            })
        }

        else{ res.status(200).json({doc}),({status:config.status.SUCCESS, msg:'Added Excel Menu file record again into db'}); }
    }
    })
    },



    addXcelProducts(result,fileupload,res){
          MulterXcel.find({},(err,doc)=>{

            if(err){
                console.log('ERROR in find mehod of mutlteroperation file',err)
                res.status(500).json({status:config.status.ERROR, msg:'Excel Product file not found in Db'});
            }
            else {

                if(!doc.length) { // var x; Boolean(x.length)=>returns false, Boolean(!x.length)=>returns true
                    console.log("DOC NOT FOUND");
                    MulterXcel.insertMany(result,fileupload,(err,doc)=>{
            
                        if(err){
                            res.status(500).json({status:config.status.ERROR, msg:'Error during inserting Excel Product file into Db'});
                        }
            
                        else {
                            if(doc){
                            // console.log('Doc is',doc);
                            res.status(200).json({status:config.status.SUCCESS, msg:'Excel Product file added to Db first time'});
                            }
                        else {
                            res.status(404).json({status:config.status.Fail, msg:'Error in multer Operation'});
                        }
                    }
                })
            }

            else{ 

                res.status(200).json({status:config.status.SUCCESS,msg:'Added new Excel Product file record again into db'}); 
            }
        }
    })
},

}
module.exports=multerOperations;