const MulterImgSchema=require('../Models/MulterImgSchema');
const config=require('../../utils/config');
const multerOperation={

    addImage(fileName,res){
        MulterImgSchema.insertMany(fileName,(err,doc)=>{

            if(err){
                res.status(500).json({status:config.status.ERROR, msg:'First Adv cant be added to Db'});
            }

            else {
                if(doc){
                res.status(200).json({status:config.status.SUCCESS, msg:'First Adv added to Db'});
                }
            else {
                res.status(404).json({status:config.status.SUCCESS, msg:'Error in First Adv multer Operation'});
            }
            }
        })
    },


    addAdv(fileAd,res){
        MulterImgSchema.insertMany(fileAd,(err,doc)=>{

            if(err){
                res.status(500).json({status:config.status.ERROR, msg:'Second Adv. cant be added to Db'});
            }

            else {
                if(doc){
                res.status(200).json({status:config.status.SUCCESS, msg:'Second Adv. added to Db'});
                }
            else {
                res.status(404).json({status:config.status.SUCCESS, msg:'Error in Second Adv multer Operation'});
            }
            }
        })
    },


    addAdv3(fileAd3,res){
        MulterImgSchema.insertMany(fileAd3,(err,doc)=>{

            if(err){
                res.status(500).json({status:config.status.ERROR, msg:'Third Adv. cant be added to Db'});
            }

            else {
                if(doc){
                res.status(200).json({status:config.status.SUCCESS, msg:' Third Adv. added to Db'});
                }
            else {
                res.status(404).json({status:config.status.SUCCESS, msg:'Error in Third Adv multer Operation'});
            }
            }
        })
    },


    removeImage(fileName,res){
        MulterImgSchema.findOneAndDelete({originalname:fileName},(err,doc)=>{
            if(err){
                res.status(500).json({status:config.status.ERROR, msg:'Image cant be deleted from Db'});
            }

            else {
                if(doc){
                res.status(200).json({status:config.status.SUCCESS, msg:'Image deleted from Db'});
                }
            else {
                res.status(404).json({status:config.status.Fail, msg:'Error in multer Operation'});
            }
        }

        })
    },

    updateImage(image1,filename,res){

        MulterImgSchema.findOneAndUpdate({originalname:image1},{$set:{originalname:filename}},(err,doc)=>{
            if(err){
                res.status(500).json({status:config.status.ERROR, msg:'Image cant be updated in Db'});
            }

            else {
                if(doc){
                res.status(200).json({status:config.status.SUCCESS, msg:'Image updated in Db'});
                }
            else {
                res.status(404).json({status:config.status.Fail, msg:'Error in multer Operation'});
            }
        }

        })
    }
}
module.exports=multerOperation;