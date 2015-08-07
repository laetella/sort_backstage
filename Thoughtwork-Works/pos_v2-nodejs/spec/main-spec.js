var printReceipt = require('../main/main');
var MyDate = require('../main/model/date');

describe('v2-test', function() {
  var allItems, dateDigitToString;
  beforeEach(function() {
    spyOn(console, 'log');
  });
  it('should print correct text', function() {

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
    printReceipt.printReceipt();
    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});
