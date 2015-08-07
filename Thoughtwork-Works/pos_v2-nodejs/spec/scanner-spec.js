var Scanner = require('../main/model/scanner');

describe('v2-scanner-test', function() {

  it('should get correct tag', function() {
    var singleInputs1 = 'ITEM000000';
    var tag1 = {barcode:'ITEM000000', count:1};
    var callTag = new Scanner.Scanner().getTag(singleInputs1);
    expect(callTag).toEqual(tag1);
  });

  it('should get correct tag', function() {
    var singleInputs2 = 'ITEM000003-2';
    var tag2 = {barcode:'ITEM000003', count:2};
    var callTag = new Scanner.Scanner().getTag(singleInputs2);
    expect(callTag).toEqual(tag2);
  });
});
