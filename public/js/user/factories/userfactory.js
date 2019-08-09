userModule.factory('userfactory', ($http,$q,RegisterUrl,LoginUrl,ChangePassUrl)=>{

    return {

        register(userObj) {
            var defer=$q.defer();
            $http.post(RegisterUrl,userObj).then(data=>{
                console.log('Data is', data);
                defer.resolve(data);

            }).catch(err=>{
                console.log('Error of factory', err);
                defer.reject(err);
            })

            return defer.promise;
        },

            login(userObj) {
                var defer=$q.defer();

                $http.post(LoginUrl,userObj).then(data=>{
                    console.log('Data is', data);
                    defer.resolve(data);
    
                }).catch(err=>{
                    console.log('Error of factory', err);
                    defer.reject(err);
                })
    
                return defer.promise;
            },

            changePass(changePassObj){
                var defer=$q.defer();

                $http.post(ChangePassUrl,changePassObj).then(data=>{
                    console.log('Inside chnage pass Factory method', data);
                    defer.resolve(data);

                }).catch(err=>{
                    console.log('Inside change pass error of factory', err);
                    defer.reject(err);
                })
                return defer.promise;
            },

            upload(fileName){

                var defer=$q.defer();
                $http.get(UploadUrl,fileName).then(data=>{
                    console.log('Inside Upload func. of factory',data);
                    defer.resolve(data);

                }).catch(err=>{
                    console.log('Error in Upload func. of facatory', err);
                    defer.reject(err);
                })
                return defer.promise;
            }
        }
    })
