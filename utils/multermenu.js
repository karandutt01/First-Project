const express=require('express');
const app1=express();
const multer=require('multer');
const path=require('path');

    const storage=multer.diskStorage({
    destination:(req,file,next)=>{
    console.log('file destination function', file);
    next(null,'./public/ExcelMenu');
    },

    filename:(req,file,next)=>{
    console.log("file is Filename function::::", file);
    next(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
}),

        fileFilterfn=(req,file,next)=>{
            console.log("FILE IS FIleFIlter function ",file);
            let err=null;
            var isMimeMatch;
        if(file.mimetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||  file.mimetype=='application/vnd.ms-excel'|| file.mimetype=='application/vnd.openxmlformats-officedocument.spreadsheetml.template')
        {
            isMimeMatch = true;
            next(err,isMimeMatch); 
        }

        else {
        isMimeMatch = false;
        console.log("Mime not Match ",err, "isMimeMatch ",isMimeMatch);
        next(err,isMimeMatch);
        }
    }

app1.use(multer({storage:storage,limits:{fileSize:20*1024*1024},fileFilter:fileFilterfn}).array('menu',4));
app1.use((err, req, res, next)=>{ 
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.send({ result: 'fail', error: { code: 1001, message: 'File is too big' } })
    }

  });
module.exports=app1;


