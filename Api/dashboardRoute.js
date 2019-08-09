const dashboardRoute=require('express').Router();
dashboardRoute.get('/dashboard', (req,res)=>{
    const roleOperations=require('../db/Helpers/RoleRightOperation');
    var pr=roleOperations.getRoleRights(req.query.role,res);
    pr.then(data=>{
        // console.log('Data of getRoleRights is', data);
        res.status(200).json({data});
    }).catch(err=>{
        console.log('Error in getRoleRights method',err)
    })
})
module.exports=dashboardRoute;