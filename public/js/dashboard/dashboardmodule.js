const dashboardModule = angular.module('dashboard',['app','ngRoute']);
dashboardModule.constant('DashboardUrl', 'http://localhost:1234/dashboard');


dashboardModule.run(($http, DashboardUrl, $window, $rootScope)=>{

    const url = DashboardUrl+"?role="+localStorage.role;
    console.log("NEW URL is ",url);

    $http.get(url).then(data=>{

        // console.log('Data is in Dashboard ',data);
        // localStorage.rights = data.data.role.rights;
        $rootScope.rights = data.data.data.rights;
        // console.log('RootScope is ',$rootScope.rights);
        if(data.data.status=='E') {
            $window.location.href='/index.html';
        }

    }).catch(err=>{
        console.log('Error in dashboard', err);
        $window.location.href='/index.html';
    })
    console.log('Dashboard Run...');
})


dashboardModule.controller('dashctrl',['$scope','dashfact',function($scope,dashfact){
    $scope.item={}
       var pr=dashfact.itemtable($scope.item);
       pr.then(data=>{console.log('Data in dashctrl',data)
       $scope.item=data;
        $scope.products=data.data.doc;
        // console.log($scope.products);

    }).catch(err=>{console.log(err)
        $scope.err=err;
    })
   }
])

dashboardModule.factory('dashfact',['$http','$q', function($http,$q){

    return {

        itemtable(doc){
        var defer=$q.defer()
        $http.post('http://localhost:1234/product123',doc).then(data=>{console.log('Data in dashfact',data);
        defer.resolve(data);
    
        }).catch(err=>{console.log(err)
            defer.reject(err);
        })
            return defer.promise;
        }
    }
}])

dashboardModule.config(($routeProvider, $locationProvider)=>{
    console.log('Dashboard config loaded...');
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl:'../../views/home.html',

    }).when('/order', {

        templateUrl:'../../views/order.html',

    }).when('/product', {

        templateUrl:'../../views/productTbl.html',
        controller:'dashctrl'

    }).when('/ads', {

        templateUrl:'../../views/ads.html',

    }).when('/menu', {

        templateUrl:'../../views/menu.html',

    }).when('/logo', {

        templateUrl:'../../views/logo.html',

    }).otherwise({template:'<h1>Wrong URL</h1>'});

})

   