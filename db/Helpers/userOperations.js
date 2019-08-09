const userSchema=require('../Models/userSchema');
const config=require('../../utils/config');
const menuSchema=require('../Models/menuSchema');
const MulterXcelModel=require('../Models/MulterXcel')
const userOperation = {
    create(userObj,res) {

        userSchema.create(userObj,(err)=>{

            if(err) {
                console.log(err);
                res.status(500).json({status:config.status.ERROR, msg:'Error in User Creation Contact to System Admin'});
            }

            else {
                console.log(userObj);
                res.status(200).json({status:config.status.SUCCESS, msg:'User Registered SuccessFully'});
            }
        })
    },

    FindFirstTime(res) {
        userSchema.findOne({userid:'admin'}, (err,doc)=>{

            if(err) {
                res.status(500).json({status:'E',message:'System Failure'});
                throw err;
            }

            if(doc) {

                if(doc.isFirstTime=='Y'){
                    res.status(200).json({status:'Y'});
                }
                else{
                    res.status(200).json({status:'N'});
                }

            }
            else{
                res.status(500).json({status:'F',message:'System Failure'});
            }
        })

    },

    findAdmin(userObj) {

        userSchema.findOne(userObj, (err,docs)=>{

            if(err) {
                console.log('ERROR is', err);
            }

            else {
                if (!docs) {

                    console.log ('Add new Admin');
                    this.addAdmin();
                }

                else {
                    console.log("Admin already there");
                }
            }
        })
    },

    addAdmin() {

        const userObj={userid:config.Admin, password:config.AdminPass,isFirstTime:'Y', role:'Admin'};
        userSchema.create(userObj, (err)=>{

            if(err) {
                console.log('Error in add admin function', err);
                throw err;
            }

            else {

                console.log( {msg:'Admin added successfully'});
                const roleRightOprations=require('../Helpers/RoleRightOperation');
                const config=require('../../utils/config');
                roleRightOprations.addRoleRight({role:config.Admin},[{name:'Orders',url:'#/order'},{name:'Products',url:'#/product'},{name:'Customers',url:'#/customers'},{name:'Advertisements', url:'#/ads'}])                
            }
        })
    },

    find(userObj,res) {
        userSchema.findOne(userObj, (err,doc)=>{
            if(err) {
                console.log(err);
                res.status(500).json({status:config.status.ERROR, msg:'Error in User Creation Contact to System Admin'});
            }
            else {
                if (doc) {
                console.log(userObj);
                const jwt=require('../../utils/token');
                const token=jwt.generateToken(doc.userid);
                res.status(200).json({token:token,status:config.status.SUCCESS, msg:'User Login SuccessFully',role:doc.role, userid:doc.userid});
                }
                else {
                    res.status(200).json({status:config.status.FAIL,message:'Invalid Userid or Password'}); 
                }
            }
        })

    },

    findOneAndUpdate(changePassObj,res){
        userSchema.findOneAndUpdate({userid:config.Admin,password:changePassObj.currentpassword},{$set:{password:changePassObj.newpassword,isFirstTime:"N"}},{new:true},(err,docs)=>{
            if(err){
                console.log('Error in findupdate method', err);
                res.status(500).json({status:config.status.ERROR, msg:"Error occured during updating password"});
            }
            else {
                if(!docs){
                        res.status(200).json({status:config.status.Fail, msg:'Current Password does not match'});
                }else{
                    res.status(200).json({status:config.status.SUCCESS,msg:'Password Changed'});
                }
            }
        })
    },

    getSearch(search,res){

        MulterXcelModel.findOne({search:search},(err,docs)=>{
            if(err){
                console.log('Error in getSearch method', err);
                res.status(500).json({status:config.status.ERROR, msg:"Error occured during searching product"});
            }
            else {
                if(docs){

                    console.log('Doc found',docs.toJSON())
                    res.status(200).json({status:config.status.SUCCESS,msg:'Item found'});
                    }

                else{
                    console.log(err);
                    res.status(404).json({status:config.status.Fail, msg:'Item Not Found'})
                }
            }
        })  
    },

    removeproduct(removeItem,res){
        menuSchema.findOneAndDelete(removeItem,(err,doc)=>{
        if(err) {
            console.log(err);
            res.status(500).json({status:config.status.ERROR, msg:'Error in User Creation Contact to System Admin'});
        }

        else {
            if(doc){
            console.log(doc);
            res.status(200).json({status:config.status.SUCCESS, msg:'User Registered SuccessFully'});
            }
        }
    }

)}

}
module.exports=userOperation;