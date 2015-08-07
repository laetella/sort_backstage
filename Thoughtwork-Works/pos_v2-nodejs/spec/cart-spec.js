var Cart = require('../main/model/cart');
var CartItem = require('../main/model/cart-item');
var loadAllItems = require('./fixtures/fixtures');

describe('v2-cart-test', function() {
  var callCart;
  var allItems = loadAllItems.loadAllItems();
  var allPromotions = loadAllItems.loadPromotions();

  beforeEach(function() {
    callCart = new Cart();
    CartItem.setItems(allItems);
    CartItem.setPromotions(allPromotions);
  });

  it('should add Item correctly', function() {
    var tag0 = {barcode:'ITEM000000', count:1};
    var callAddItem = callCart.addItem(tag0);
    var expectArray = [ { barcode: 'ITEM000000', count: 1, _item: { barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3 } } ];
    expect(callAddItem[0].barcode).toEqual(expectArray[0].barcode);
    expect(callAddItem[0].count).toEqual(expectArray[0].count);
  });

});
describe('v2-cart-test', function() {
  var tag1,tag2,tag3,callItem,resultArray;
  var callCart;

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

  it('should get correct price', function() {

    var callPrice = callCart.calculatePrice();
    expect(callPrice).toBe(51);
  });

  it('should get correct price', function() {
    var callPrice = callCart.savePrice();
    expect(callPrice).toBe(7.5);
  });

});
