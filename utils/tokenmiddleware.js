const tokenOpr = require('./token');
const config=require('./config');
function checkToken(req,res,next) {
var token=req.headers['auth-token'];

    if(token) {

        var decoded=tokenOpr.verifyToken(token);
        console.log('After Token Verified ',decoded)

        if(!decoded) {
            res.status(401).json({status:config.status.ERROR, msg:'Invalid Token'});
        }

        else { 
            next() ;
        }
    }

    else {
// Agar token he nhi h local Storage me
        res.status(401).json({status:config.status.ERROR, msg:'U r UnAuthorized to access this Page'});
    }
}
module.exports=checkToken;