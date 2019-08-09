const mongoose=require('../connection');
const Schema=mongoose.Schema;

const RoleRightSchma=new Schema({
    role:{type:String,required:true, unique:true},
    rights:{type:Array}
})
const RoleRightModel=mongoose.model('RoleRights', RoleRightSchma);
module.exports=RoleRightModel;