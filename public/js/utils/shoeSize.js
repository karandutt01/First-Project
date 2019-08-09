function shoeSize(size){
  var shoeTitle=document.querySelector('.size-title');
  var sizes = document.querySelectorAll(".size .size-list");

  if(shoeTitle.innerText == size.innerText){
    shoeTitle.innerText = '';
    size.classList.remove("selected");
  }else{
    shoeTitle.innerText = size.innerText;
    sizes.forEach(size=>size.classList.remove("selected"));
  size.classList.toggle("selected");
  }
}


  function proceedToCheckout(checkoutBtn){
   var product=localStorage.getItem('cart');
   product=JSON.parse(product);
   console.log(product);
    
    var fetchVal=fetch('findItem',{
      method:"POST",
      headers:{ "Content-Type": "application/json"},
      body:JSON.stringify({product:product})
    })

   console.log('Fetch Value',fetchVal);
  }

 
  
  