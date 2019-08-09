const app=angular.module('app',[]);
app.config(($httpProvider)=>{
    $httpProvider.interceptors.push('AuthInterceptor');
})
app.run(($http,$window)=>{
    $http.get('/isFirstTime').then(data=>{
        if(data.data.status=='Y') {
            $window.location.href='/changepass.html';
        }
        else if(data.data.status=='E'||data.data.status=='F'){
            $window.location.href='/error.html';
        }
    }).catch(err=>{
        console.log('Error in app module', err);
        $window.location.href = '/error.html';
    })
})

app.factory('AuthInterceptor',()=>{

    return{

    request:function(config) {

        console.log('Request Interceptor');
        config.headers['auth-token']=localStorage.tokenId;
        return config;
        },

    requestError: function(config) {
        return config;
      },
  
      response: function(res) {
        return res;
      },
  
      responseError: function(res) {
        return res;
      }
    }
})

