const productModule=angular.module('product',['ngStorage']);
productModule.constant('DisplayIndex','http://localhost:1234/uploadxcelMenu');
productModule.constant('searchurl','http://localhost:1234/search');
productModule.constant('addtocart','http://localhost:1234/checkout');
productModule.constant('Emptycart','http://localhost:1234/EmptyCart');
productModule.constant('BookItem','http://localhost:1234/BookItem');


productModule.controller('productcntrl',['$scope','productfact', ($scope,productfact)=>{

    $scope.product={};
    var promise=productfact.displayindex($scope.product);
    promise.then(data=>{console.log('Data in displayindex controller',data);
    $scope.product=data.data.doc;
    console.log($scope.product)

    }).catch(err=>{
      console.log('Error in displayindex controller',err);
      $scope.err=err;
    })

    $scope.addtocart=()=>{
    var promise=productfact.addproduct($scope.product);
    promise.then(data=>{console.log('Data in add product controller',data);
    $scope.product=data;

    }).catch(err=>{
      console.log('Error in add product controller',err);
      $scope.err=err;
    })

    },

    $scope.search=()=>{
        var promise=productfact.searchfact($scope.product);
        promise.then(data=>{
            console.log('Data in search product controller',data);
            $scope.product=data;
    
        }).catch(err=>{
            console.log('Error in search product controller',err);
            $scope.err=err;
        })
    },

    $scope.clearcart=()=>{
    var promise=productfact.clearcart($scope.product);
        promise.then(data=>{
            console.log('Data in clearcart controller',data);
            $scope.product=data;
    
        }).catch(err=>{
            console.log('Error in clearcart controller',err);
            $scope.err=err;
        })
    },

    $scope.checkout=()=>{
        console.log()
        var pr=productfact.checkout($scope.product);
        pr.then(data=>{console.log('Data in checkout() of controller',data)
        $scope.product=data;

    }).catch(err=>{console.log('Error in checkout() controller',err)
        $scope.err=err;
    })

    }

    }
    
])
