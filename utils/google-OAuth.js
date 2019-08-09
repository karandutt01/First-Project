const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth2');
const config=require('./config');
const googleSchema=require('../db/Models/googleSchema');

passport.serializeUser((user,done)=>{
  done(null,user)
});

passport.deserializeUser((id,done)=>{
  googleSchema.findById(id).then(user=>{
    done(null,user);
  })
})

passport.use(new GoogleStrategy({

  clientID:config.clientID,
  clientSecret:config.clientSecret,
  callbackURL:'http://localhost:1234/BookOrder',
  
  
},(accessToken, refreshToken, profile,email, done)=>{
  // console.log('Access Token is',accessToken);
  // console.log("Profile is",profile,"Email is",email);
  done(null,profile)
  googleSchema.findOne({googleid:profile.id},(err,doc)=>{
    
    if(err){ console.log("Error in googleSchema findOne method",err);}

    else{
      if(doc){ console.log('Doc in google Schema found', doc);
    }

      else{
        console.log('Before Creating');
       googleSchema.create((err,doc)=>{
         if(err){console.log('Error in googleOauth',err)}
         else{
           if(doc){console.log('Doc is created in DB',doc)}
           done(null,user)
         }
       })
      }
    }
  })
}))


 
