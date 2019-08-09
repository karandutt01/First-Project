const mongoose=require('../connection');
const Schema=mongoose.Schema;

const menuSchema=new Schema({},{strict:false})
const menuModel=mongoose.model('Menus',menuSchema);
module.exports=menuModel;