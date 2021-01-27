

// first cart plus
const plusBtn = document.getElementById("plus");
plusBtn.addEventListener("click", function () {
   const quantity = document.getElementById("increase-quantity-plus").value++;
   const quantityNumber = parseFloat(quantity);
   const oldPrice = document.getElementById("price").innerText;
   const oldPriceNumber = parseFloat(oldPrice);
   const totalPrice = oldPriceNumber + 1219;
   document.getElementById("price").innerHTML = totalPrice;

   // for subtotal plus

   const subTotal = document.getElementById("subtotal").innerText;
   const subTotalNumber = parseFloat(subTotal);
   const NewSubTotal = subTotalNumber + 1219;
   document.getElementById("subtotal").innerHTML = NewSubTotal;

   // for total price

   const total = document.getElementById("total-value").innerText;
   const totalNumber = parseFloat(total);
   const totalValue = totalNumber + 1219;
   document.getElementById("total-value").innerHTML = totalValue;

})

// first cart minus
const minusBtn = document.getElementById("minus");
minusBtn.addEventListener("click", function () {
   const quantity = document.getElementById("increase-quantity-plus").value--;
   const quantityNumber = parseFloat(quantity);
   const oldPrice = document.getElementById("price").innerText;
   const oldPriceNumber = parseFloat(oldPrice);
   const totalPrice = oldPriceNumber - 1219;
   document.getElementById("price").innerHTML = totalPrice;

   //   for subtotal minus

   const subTotal = document.getElementById("subtotal").innerText;
   const subTotalNumber = parseFloat(subTotal);
   const NewSubTotal = subTotalNumber - 1219;
   document.getElementById("subtotal").innerHTML = NewSubTotal;

   // for total price


   const total = document.getElementById("total-value").innerText;
   const totalNumber = parseFloat(total);
   const totalValue = totalNumber - 1219;
   document.getElementById("total-value").innerHTML = totalValue;


})

// second cart plus

const secondCartPlus = document.getElementById("second-plus");
secondCartPlus.addEventListener("click", function () {
   const quantity = document.getElementById("increase-quantity-second-cart").value++;
   const quantityNumber = parseFloat(quantity);
   const coverOldPrice = document.getElementById("cover-price").innerText;
   const coverOldPriceNumber = parseFloat(coverOldPrice);
   const totalCoverPrice = coverOldPriceNumber + 53;
   document.getElementById("cover-price").innerHTML = totalCoverPrice;

   // for cover subtotal plus

   const subTotal = document.getElementById("subtotal").innerText;
   const subTotalNumber = parseFloat(subTotal);
   const NewSubTotal = subTotalNumber + 53;
   document.getElementById("subtotal").innerHTML = NewSubTotal;

   // cover cover total plus
   const total = document.getElementById("total-value").innerText;
   const totalNumber = parseFloat(total);
   const totalValue = totalNumber + 53;
   document.getElementById("total-value").innerHTML = totalValue;

})
const secondCartMinus = document.getElementById("second-minus");
secondCartMinus.addEventListener("click", function () {
   const quantity = document.getElementById("increase-quantity-second-cart").value--;
   const quantityNumber = parseFloat(quantity);
   const coverOldPrice = document.getElementById("cover-price").innerText;
   const coverOldPriceNumber = parseFloat(coverOldPrice);
   const totalCoverPrice = coverOldPriceNumber - 53;
   document.getElementById("cover-price").innerHTML = totalCoverPrice;

   // for cover subtotal minus
   const subTotal = document.getElementById("subtotal").innerText;
   const subTotalNumber = parseFloat(subTotal);
   const NewSubTotal = subTotalNumber - 53;
   document.getElementById("subtotal").innerHTML = NewSubTotal;

   // cover cover total minus
   const total = document.getElementById("total-value").innerText;
   const totalNumber = parseFloat(total);
   const totalValue = totalNumber - 53;
   document.getElementById("total-value").innerHTML = totalValue;



})

