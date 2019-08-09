const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const googleSchema=new Schema({
  username:{type:String},
  googleid:{type:String}
})
const googleModel=mongoose.model('google',googleSchema)
module.exports=googleModel;