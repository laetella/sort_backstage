var CartItem = require('./cart-item');

function Cart() {
  this.resultArray = [];
}

// Cart.setItems = function (items) {
//   CartItem.setItems(items);
// }
//
// Cart.setPromotions = function (promotions) {
//   CartItem.setPromotions(promotions);
// }

Cart.prototype.addItem = function(tag) {
  var sign = false;
  for(var item = 0; item < this.resultArray.length; item++) {
    if(this.resultArray[item].barcode === tag.barcode) {
        this.resultArray[item].count += tag.count;
        sign = true;
        break;
    }
  }
  if (sign === false) {
    var newCartItem = new CartItem(tag);
    // var newCartItem = new CartItem.CartItem(tag);
    this.resultArray.push(newCartItem);
  }
  return this.resultArray;
};

Cart.prototype.calculatePrice = function() {
  var sum = 0;
  for(var resultItem = 0; resultItem < this.resultArray.length; resultItem++) {
    // console.log(this.resultArray[resultItem].getSubTotal());
    sum += this.resultArray[resultItem].getSubTotal();
  }
  return sum;
};

Cart.prototype.savePrice = function() {
  var actualSum = 0;
  for(var resultItem = 0; resultItem < this.resultArray.length; resultItem++) {
    actualSum += this.resultArray[resultItem].getSubActualTotal();
  }
  return actualSum - this.calculatePrice();
};

// module.exports = Cart;
module.exports = Cart;
