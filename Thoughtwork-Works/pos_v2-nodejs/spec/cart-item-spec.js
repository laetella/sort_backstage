var CartItem = require('../main/model/cart-item');
var loadAllItems = require('./fixtures/fixtures');
// var loadPromotions = require('./fixtures');

describe('v2-cart-item-test', function() {
  var tag1,tag2,callItem;
  var allItems = loadAllItems.loadAllItems();
  var allPromotions = loadAllItems.loadPromotions();
  CartItem.setItems(allItems);
  CartItem.setPromotions(allPromotions);

  beforeEach(function() {
    tag1 = {barcode:'ITEM000000', count:1};
    tag2 = {barcode:'ITEM000003', count:2};
    callItem = new CartItem(tag1);
  });

  it('should get correct item', function() {
    callItem.setItem(tag1);
    var expectItem = { barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3 };
    expect(callItem._item.barcode).toEqual(expectItem.barcode);
    expect(callItem._item.name).toEqual(expectItem.name);
    expect(callItem._item.unit).toEqual(expectItem.unit);
    expect(callItem._item.price).toEqual(expectItem.price);
  });

  it('should get correct price', function() {
    var callSubTotal = callItem.getSubTotal();
    expect(callSubTotal).toBe(3);
  });

  it('should get correct price', function() {
    var callSubActualTotal = callItem.getSubActualTotal();
    expect(callSubActualTotal).toBe(3);
  });

});
