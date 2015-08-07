var Printer = require('../main/model/printer');
var Cart = require('../main/model/cart');
var MyDate = require('../main/model/date');
describe('v2-scanner-test', function() {
  var theCart;
  beforeEach(function() {
    tag1 = {barcode:'ITEM000001', count:1};
    tag2 = {barcode: 'ITEM000003', count:1};
    tag3 = {barcode: 'ITEM000005', count:1};
    callCart = new Cart();
    for(var item = 0; item < 5; item ++) {
      resultArray = callCart.addItem(tag1);
    }
    for(var item2 = 0; item2 < 2; item2 ++) {
      resultArray = callCart.addItem(tag2);
    }
    for(var item3 = 0; item3 < 3; item3 ++) {
      resultArray = callCart.addItem(tag3);
    }
  });

  it('should print correct string', function() {
    var callString = new Printer.Printer().printString(callCart);
    var expectText =
      '***<没钱赚商店>收据***\n' +
      '打印时间：' + new MyDate().getCurrentDate() + '\n' +
      '----------------------\n' +
      '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
      '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
      '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
      '----------------------\n' +
      '总计：51.00(元)\n' +
      '节省：7.50(元)\n' +
      '**********************';
    expect(callString).toBe(expectText);
  });

});
