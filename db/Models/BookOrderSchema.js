const mongoose=require('mongoose');
var Schema=mongoose.Schema;

var OrderSchema=new Schema({},{strict:false})
var OrderModel=mongoose.model('Orders',OrderSchema);
module.exports=OrderModel;