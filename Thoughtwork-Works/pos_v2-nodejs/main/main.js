var Scanner = require('./model/scanner');
var Cart = require('./model/cart');
var Printer = require('./model/printer');

function printReceipt() {
  var inputs = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
  ];
  // var scanItem = new Scanner();
  // var thisCart = new Cart();
  var scanItem = new Scanner.Scanner();
  var thisCart = new Cart();
  var tag;
  for (var item = 0; item < inputs.length; item++) {
    tag = scanItem.getTag(inputs[item]);
    thisCart.addItem(tag);
  }
  // console.log((new Printer()).printString(thisCart));
  console.log((new Printer.Printer()).printString(thisCart));
  // return (new printer.Printer()).printString(thisCart);
}
printReceipt();
exports.printReceipt = printReceipt;
// module.exports = printReceipt;
