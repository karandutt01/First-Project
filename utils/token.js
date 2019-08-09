const jwt=require('jsonwebtoken');
const config=require('./config');
const tokenOperation = {

    generateToken(userid) {

        var token=jwt.sign({userid}, config.Secret, {expiresIn:'1h'});
        return token;
    },

    verifyToken(token) {

        var decoded=jwt.verify(token, config.Secret);
        console.log('Decoded is', decoded.userid );
        return decoded;
    }
}
module.exports=tokenOperation;