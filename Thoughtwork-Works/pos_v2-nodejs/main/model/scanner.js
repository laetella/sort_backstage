var loadAllItems = require('../../test/fixtures');

function Scanner() {

}

Scanner.prototype.getTag = function(singleInputs) {
 // var  allItems = loadAllItems();
 var  allItems = loadAllItems.loadAllItems();
 var tag = {};
  for(var goodsItem = 0; goodsItem < allItems.length; goodsItem ++) {
    if (singleInputs.length != allItems[goodsItem].barcode.length){
      tag.barcode = singleInputs.split('-')[0];
      tag.count = Number(singleInputs.split('-')[1]);
    } else {
      tag.barcode = singleInputs;
      tag.count = 1;
    }
  }
return tag;
};

// module.exports = Scanner;
module.exports.Scanner = Scanner;
