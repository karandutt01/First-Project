const logoSchema=require('../Models/logoSchema');
const config=require('../../utils/config');
const multerOperation={

    addLogo(fileLogo,res){
       
        logoSchema.insertMany(fileLogo,(err,doc)=>{

            if(err){
                res.status(500).json({status:config.status.ERROR, msg:'Logo cant be added to Db'});
            }

            else {
                if(doc){
                res.status(200).json({status:config.status.SUCCESS, msg:'Logo added to Db'});
                }
            else {
                res.status(404).json({status:config.status.SUCCESS, msg:'Error in multer Operation'});
            }
            }
        })

    },

    removeLogo(fileName,res){
        logoSchema.findOneAndDelete({originalname:fileName},(err,doc)=>{
            if(err){
                res.status(500).json({status:config.status.ERROR, msg:'Logo cant be deleted from Db'});
            }

            else {
                if(doc){
                res.status(200).json({status:config.status.SUCCESS, msg:'Logo deleted from Db'});
                }
            else {
                res.status(404).json({status:config.status.Fail, msg:'Error in multer Operation'});
            }
        }

        })
    },

    updateLogo  (oldLogo,newLogo,res){

        logoSchema.findOneAndUpdate({originalname:oldLogo},{$set:{originalname:newLogo}},(err,doc)=>{
            if(err){
                res.status(500).json({status:config.status.ERROR, msg:'Logo cant be updated in Db'});
            }

            else {
                if(doc){
                res.status(200).json({status:config.status.SUCCESS, msg:'Logo updated in Db'});
                }
            else {
                res.status(404).json({status:config.status.Fail, msg:'Error in multer Operation'});
            }
        }

        })
    }
}
module.exports=multerOperation;