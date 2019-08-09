const mongoose=require('../connection');
const Schema=mongoose.Schema;

const logoSchema=new Schema({
    originalname:{type:String,required:true,lowercase:true},
    destination: {type:String,required:true,lowercase:true},
    path:{type:String,required:true,lowercase:true}
})
const logoModel=mongoose.model('Logo',logoSchema);
module.exports=logoModel;