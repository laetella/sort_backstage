var loadAllItems = require('../../test/fixtures');
var loadPromotions = require('../../test/fixtures');

function CartItem(tag) {
  this.barcode = tag.barcode;
  this.count = tag.count;
  this._item = {};
  this.setItem(tag);
}

CartItem.prototype.setItem = function(tag) {
  // var allItems= loadAllItems();
  var allItems = loadAllItems.loadAllItems();
    for(item = 0; item < allItems.length; item ++) {
      if(tag.barcode === allItems[item].barcode) {
        this._item = allItems[item];
        break;
      }
    }
}

CartItem.prototype.getSubTotal = function () {
  var allPromotions = loadPromotions.loadPromotions();
  var temp_count = this.count;
  for(var prom = 0; prom < allPromotions[0].barcodes.length; prom ++) {
    if(this.barcode === allPromotions[0].barcodes[prom]) {
      if(this.count >= 3) {
        temp_count = this.count - Math.floor(this.count/3);
      }
    }
  }
  return temp_count * this._item.price;
}

CartItem.prototype.getSubActualTotal = function () {
  return this.count * this._item.price;
}

// module.exports = CartItem;
exports.CartItem = CartItem;
