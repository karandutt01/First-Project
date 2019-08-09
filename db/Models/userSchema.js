const mongoose=require('../connection');
const Schema=mongoose.Schema;

const UserSchema = new Schema ({

    userid:{type:String,required:true, unique:true},
    password:{type:String,required:true},
    role:{type:String,default:'Customer'},
    isFirstTime:{type:String, default:'N'},
})
const userTable=mongoose.model('users', UserSchema);
module.exports=userTable;