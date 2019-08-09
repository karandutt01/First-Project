const mongoose=require('../connection');
const Schema=mongoose.Schema;

const ProductSchema=new Schema({},{strict:false});
const ProductModel=mongoose.model('products',ProductSchema);
module.exports=ProductModel;