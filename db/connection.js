const mongoose=require('mongoose');

const config=require('../utils/config');
mongoose.connect(config.dbconfig);
module.exports=mongoose;