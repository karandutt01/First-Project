const roleRightSchema=require('../Models/Role&RightSchema');
const config=require('../../utils/config');
const roleRightOperation= {

    addRoleRight(name,rights) {
        roleRightSchema.create({role:name, rights:rights}, (err,doc)=>{
            if(err){
                console.log('Unable to Create Role and Right')
            }
            else {
                console.log('Role and Right Created...');
            }
        });
    },

    getRoleRights(){
        
        var promise =new Promise((resolve, reject)=>{
        roleRightSchema.findOne({role:config.Admin},(err,doc)=>{
            if(err){
                console.log('Error in Role rights method', err);
                // res.status(500).json({message:'Error During Role Fetch'});
                reject('Error During Role Fetch',err)
            }
            else
            if(doc){
                // console.log("Doc in RoleRights", doc);
                // res.status(200).json({role:doc});\
                resolve(doc)
            }
            else{
                console.log('Failure in RoleRights');
                // res.status(404).json({message:'No Role Found'});
                reject('No Role Found');
            }
        }) 
        
    })
    return promise;

    }
}
module.exports=roleRightOperation;