const express=require('express');
const app=express();
const multer=require('multer');
const path=require('path');

const storageFile=multer.diskStorage({
// Multer accepts an options object
// The disk storage engine gives you full control on storing files to disk.
// There are two options available, destination and filename. 
// They are both functions that determine where the file should be stored.
destination:(req,file,next)=>{
// destination is used to determine within which folder the uploaded files should be stored. 
//  If no destination is given, the operating system's default directory for temporary files is used.
console.log('file destination function', file);
next(null,'./public/imagesAdv3/');

},

filename:(req,file,next)=>{
// filename is used to determine what the file should be named inside the folder.
    // var file='Uploaded Images';
    console.log("file is Filename function::::", file);
    next(null,file.fieldname+path.extname(file.originalname));
}
}),

fileFilter1=(req,file,next)=>{
// Set fileFilter to a function to control which files should be uploaded and which should be skipped. 
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

app.use(multer({storage:storageFile,limits:{fileSize:20*1024*1024},fileFilter:fileFilter1}).array('Advimage3',4));
app.use((err, req, res, next)=>{ 
    // ye error multer ki documentation se liya ('LIMIT_FILE_SIZE')
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.send({ result: 'fail', error: { code: 1001, message: 'File is too big' } })
    }

  });
module.exports=app;


