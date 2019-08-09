function plus(){
    var input = document.querySelector("#plus-minus>input");
    let val = parseInt(input.value)
    val<8?input.value = ++val:alert("Can't add more than 8 units");
}
function minus(){
    var input = document.querySelector("#plus-minus>input");
    let val = parseInt(input.value)
    val>1? input.value = --val:alert("Atleast 1 unit is required");
}



async function addItem(obj){
  var id = obj.getAttribute("pid");
  var x = await fetch("/example", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({pid:id}), // body data type must match "Content-Type" header
    })
    
    var object = await x.json()
    object.data.Qty = 1;
    console.log("Object is ",object);
    if(object.flag === "S"){
      var cart = localStorage.cart?JSON.parse(localStorage.cart):[];
      let index = cart.findIndex(item=>item._id === object.data._id);
      // console.log("Index is ",index);
      if(index == -1){
        cart.push(object.data);
      }else{
        cart[index].Qty++;
      }
      localStorage.cart = JSON.stringify(cart);
    }
     
  }

  function choose(){
     var Cart=JSON.parse(localStorage.getItem('cart'));
     var counter2=document.querySelector('.counter2').innerText;
     counter2=parseInt(counter2);
    //  console.log(counter2);

     for(var i in Cart){
        var price=Cart[i].Price;
        var price=parseFloat(price.replace(',',''));
        console.log(price);

      var select=document.querySelector('select').value;
      var Totalprice=0;

        for(var i in select){
          Totalprice+=price*select[i]; 

            if(select[i]==2){
              counter2=2;
              document.querySelector('.counter2').innerText=counter2;
              console.log(counter2);

            }
            
            else if(select[i]==3){
              counter2=3;
              document.querySelector('.counter2').innerText=counter2;
              console.log(counter2);

              
            }
            else if(select[i]==4){
              counter2=4;
              document.querySelector('.counter2').innerText=counter2;

            }
            else if(select[i]==5){
              counter2=5;
              document.querySelector('.counter2').innerText=counter2;

            }
            else if(select[i]==6){
              counter2=6;
              document.querySelector('.counter2').innerText=counter2;

            }
            else if(select[i]==7){
              counter2=7;
              document.querySelector('.counter2').innerText=counter2;

            }
            else {

              counter2=1;
              document.querySelector('.counter2').innerText=counter2;

            }
          }
        console.log(Totalprice)

      }

    var Subtotal=document.querySelector("#Subtotal");
    Subtotal.innerText= "₹"+Totalprice.toLocaleString();
}

function removeItem(btn){
  Cart=JSON.parse(localStorage.getItem('cart'));
  console.log(Cart);
  var pid=btn.getAttribute('pid')
  for(i in Cart){
     if(Cart[i]._id==pid){
        Cart[i].Qty--;

       }
     }
   }

function ClearCart(){  
  var Cart=JSON.parse(localStorage.getItem('cart'));
  Cart=[];  
  console.log(Cart);
}
  


