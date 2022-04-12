// https://www.w3schools.com/jquery/jquery_ref_html.asp
//cart items
// $(document).ready(function(){
//   const cartinfo=$("#cart-info");
//   const cart=$("#cart");
//   cartinfo.click(function(){
//     // alert("clicked");
//     cart.toggleClass('show-cart');
//   });
// });


//adding items to the cart
$(document).ready(function(){

    //cart items
  const cartinfo=$("#cart-info");
  const cart=$("#cart");
  cartinfo.click(function(){
     //alert("clicked");
    cart.toggleClass('show-cart');
  });



  const cartBtn=$('.store-item-icon');
  //https://api.jquery.com/each/
  cartBtn.each(function(){
    $(this).click(function(e){
      // console.log(e.target.parentElement.previousElementSibling);
      //store the image in side a variable
      var image_fullpath= e.target.parentElement.previousElementSibling.src;
      console.log(image_fullpath);
      //getting only image name
      var img_position=image_fullpath.indexOf("images")+6;
      //console.log(img_position);//47
      var image_name=image_fullpath.slice(img_position);
      //console.log("image_name"+image_name);

      //create a JS object item
      const item={};
      item.img="image_cart"+image_name;
      //getting name of the product
      var name=e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
      //console.log(name);
      item.name=name;

      //getting the price of the product

      var price=e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
      console.log(price);
      var finalprice=price.slice(1);
      item.price=finalprice;
      //console.log(item);

      //add item to the cart

      var cartitem=$("<div/>");//add a div using jquery
      cartitem.addClass("cart-item d-flex justify-content-between text-capitalize my-3");//jquery function
      var item_content=`<img src="${item.img}" alt="Image" class="rounded-circle" id="item-img">
      <!-- price and product name info -->

      <div class="cart-item-text">
        <p id="cart-item-title">${item.name}</p>
        <span>$</span>
        <span id="cart-item-price" class="cart-item-price">${item.price}</span>
      </div>
      <!-- div for price and product name info ends -->
      <!-- delete button -->
      <a href="#" id=="cart-item-remove" class="cart-item-remove">
        <i class="fas fa-trash-alt"></i>
      </a>`;
      cartitem.html(item_content);//add html content to the div
      const total=$(".cart-total-container");
      cartitem.insertBefore(total);
      alert("item added to the cart");
      showtotal();


      

      //deleting the element
      $(".cart-item-remove").click(function(){
        $(this).prev().prev().remove();//remove image
        $(this).prev().remove();//remove price n name
        $(this).remove();//removing the delete button
          showtotal();//update the total
      });


    



        // <!-- cart items -->
        // <div class="cart-item d-flex justify-content-between text-capitalize my-3">
        //   <!-- rounded image:https://getbootstrap.com/docs/4.0/utilities/borders/ -->
        //   <img src="image_cart/toy1.png" alt="Image" class="rounded-circle" id="item-img">
        //   <!-- price and product name info -->
        //
        //   <div class="cart-item-text">
        //     <p id="cart-item-title"></p>
        //     <span>$</span>
        //     <span id="cart-item-price" class="cart-item-price">10.99</span>
        //   </div>
        //   <!-- div for price and product name info ends -->
        //   <!-- delete button -->
        //   <a href="#" id=="cart-item-remove" class="cart-item-remove">
        //     <i class="fas fa-trash-alt"></i>
        //   </a>
        // </div>

    });
  });
});


function showtotal(){
  const total=[];
  const items=document.querySelectorAll(".cart-item-price");
  items.forEach(function(item){
    // push item inside the total array
    //console.log(item);
    total.push(parseFloat(item.textContent));
  });
  var sum=0;
  for(var i=0; i<total.length; i++){
    sum=sum+total[i];
  }
  //console.log(sum);
  // total
  document.getElementById("cart-total").textContent=sum;
  // cart info
  document.getElementById("item-count").textContent=total.length;
  document.querySelector(".item-total").textContent=sum;


}
