var Scanner = require('../main/model/scanner');
var loadAllItems = require('./fixtures/fixtures');

describe('v2-scanner-test', function() {
  var theScanner,allItems;

  beforeEach(function() {
    allItems = loadAllItems.loadAllItems();
    theScanner = new Scanner.Scanner();
    // theScanner.setItems(allItems);
    Scanner.Scanner.setItems(allItems);
  });

  it('should get correct tag', function() {
    var singleInputs1 = 'ITEM000000';
    var tag1 = {barcode:'ITEM000000', count:1};
    var callTag = theScanner.getTag(singleInputs1);
    expect(callTag).toEqual(tag1);
  });

  it('should get correct tag', function() {
    var singleInputs2 = 'ITEM000003-2';
    var tag2 = {barcode:'ITEM000003', count:2};
    var callTag = theScanner.getTag(singleInputs2);
    expect(callTag).toEqual(tag2);
  });

});
