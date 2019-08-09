productModule.factory('productfact',($http,$q,addtocart,DisplayIndex,BookItem,searchurl,Emptycart,$window)=>{

  return {

    displayindex(result){
    var defer=$q.defer();
    $http.post(DisplayIndex,result).then(data=>{
    console.log('Data in displayindex factory',data);
    defer.resolve(data);

    }).catch(err=>{
        console.log('Error in displayindex factory',err)
        defer.reject(err);
    })

        return defer.promise;
    },

      addproduct(){
      var defer=$q.defer();
      $http.get(addtocart).then(data=>{console.log('Data in addproduct factory',data);
      defer.resolve(data);
      // $localStorage.cartData=data;
      // console.log('local storage cart data',$localStorage.cartData);
      $window.location.href='/checkout';

    }).catch(err=>{console.log('Error in addproduct factory',err)
        defer.reject(err);
    })

    return defer.promise;
  },
  

      searchfact(search){
      var defer=$q.defer();
      $http.get(searchurl,search).then(data=>{
          console.log('Data is', data);
          defer.resolve(data);
  
      }).catch(err=>{
          console.log('Error of factory', err);
          defer.reject(err);
      })
      return defer.promise;
      },


        clearcart() {
        var defer=$q.defer();
        $http.get(Emptycart).then(data=>{
        console.log('Data is',data);
        defer.resolve(data);

        }).catch(err=>{console.log("Error is",err);
            defer.reject(err);
        })

        return defer.promise;
    },

        checkout(){
        var defer=$q.defer()
        $http.get(BookItem).then(data=>{
        console.log('Data in checkout() of factory', data);
        defer.resolve(data);
        $window.location.href = '/BookItem';

        }).catch(err=>
            {console.log('Error in checkout() of facotry',err)
            defer.reject(err);
        })

        return defer.promise;
        }

    }
})
