userModule.controller('usercntrl', ($scope,userfactory,SUCCESS, FAIL,$window)=>{
    $scope.user = {};
    $scope.doRegister = ()=>{
        console.log('User id is ',$scope.user.userid, ' Pwd is ',$scope.user.password);
        const promise=userfactory.register($scope.user)
        promise.then(data=>{
            console.log('Promise data is',data);
            $scope.data=data;
        }).catch(err=>{
            console.log('Error of controller', err);
            $scope.error=err;
        })
    }
    
    $scope.dologin=()=>{

        console.log('User id is ',$scope.user.userid, ' Pwd is ',$scope.user.password);
        const promise=userfactory.login($scope.user)
        promise.then(data=>{
            if(data.data.status==SUCCESS) {

                localStorage.tokenId = data.data.token ;
                localStorage.role=data.data.role;
                localStorage.userid=data.data.userid;
                console.log('Data of dashboard', data.data)
                $window.location.href='/dashboard.html'
            }

            else if (data.data.status==FAIL) {
                $scope.data = data;
            }

            console.log('Promise data is',data);
            $scope.data=data;

        }).catch(err=>{
            console.log('Error of controller', err);
            $scope.error=err;
        })
    }

    $scope.changePass=()=>{
        if($scope.user.newpassword === $scope.user.confirmpassword){
        var promise=userfactory.changePass($scope.user);
        promise.then(data=>{
            console.log('Password Change data in controller',data);
            $scope.data=data;

        }).catch(err=>{
            console.log('Error in Change password', err);
            $scope.error=err;
        })
    }else{
        $window.alert("New Password & Confirm Password doesnt match");
    }
    }
})

