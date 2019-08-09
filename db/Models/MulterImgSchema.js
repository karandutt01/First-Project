const mongoose=require('../connection');
const Schema=mongoose.Schema;

const ImageSchema=new Schema({

    originalname:{type:String,required:true,lowercase:true},
    destination: {type:String,required:true,lowercase:true},
    path:{type:String,required:true,lowercase:true}
})
const ImageModel=mongoose.model('Images',ImageSchema);
module.exports=ImageModel;