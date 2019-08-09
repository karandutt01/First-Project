const express=require('express');
const app1=express();
const multer=require('multer');
const path=require('path');

const storageFile=multer.diskStorage({
destination:(req,file,next)=>{
console.log('file destination function', file);
next(null,'./public/logo/');
},

filename:(req,file,next)=>{
    console.log("file is Filename function::::", file);
    next(null,file.fieldname+Date.now()+path.extname(file.originalname));
}
}),

fileFilter1=(req,file,next)=>{
            console.log("FILE IS FIleFIlter function ",file);
            let err=null;
            var isMimeMatch;
if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
    
                isMimeMatch = true;
                next(err,isMimeMatch); 
            }
    
else {
        isMimeMatch = false;
        console.log("Mime not Match ",err, "isMimeMatch ",isMimeMatch);
        next(err,isMimeMatch);
        }
}

app1.use(multer({storage:storageFile,limits:{fileSize:20*1024*1024},fileFilter:fileFilter1}).array('logo',5));
app1.use((err, req, res, next)=>{ 
    // ye error multer ki documentation se liya ('LIMIT_FILE_SIZE')
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.send({ result: 'fail', error: { code: 1001, message: 'File is too big' } })
    }

  });
module.exports=app1;


