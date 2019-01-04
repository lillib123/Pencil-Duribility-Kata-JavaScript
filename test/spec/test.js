(function () {
  'use strict';

  describe('Pencil Durability code kata unit tests', function () {

    let testPencil;

    beforeEach(function() {
      testPencil = new Pencil();
      paper.currentWriting = "";
    });

    it('should see a pencil funtion', function () {
      expect(typeof Pencil).toEqual("function");
    });
    it('should see a paper object', function() {
      expect(typeof paper).toEqual("object");
    });
    it('should see a pencil function storage object', function() {
      expect(typeof pencilFunctionStorage).toEqual("object");
    });
    it('the write method in pencil function storage should be accessible via a pencil object', function() {
      expect(typeof testPencil.write).toEqual("function");
    });
    it('the paper should start out with no writing', function() {
      expect(paper.currentWriting).toEqual("");
    });
    it('a new pencil object should start with 0 characters written', function() {
      expect(testPencil.numberOfCharactersWritten).toEqual(0);
    });
    it('a new pencil should start with a default degradation limit of 10', function() {
      expect(testPencil.degradationLimit).toEqual(10);
    });
    it('calling the write function should update the current writing on the paper object', function() {
      testPencil.write('hello');
      expect(paper.currentWriting).toEqual('hello');
    });
    it('the write method should update the number of characters written on the pencil object', function() {
      testPencil.write('hello');
      expect(testPencil.numberOfCharactersWritten).toEqual(5);
    });
    it('the write method should ignore white spaces when updating the number of characters written on the pencil object', function() {
      testPencil.write('ello govna');
      expect(testPencil.numberOfCharactersWritten).toEqual(9);
    });
    it('if the number of characters written exceeds the degradation limit, the pencil will replace characters with spaces', function() {
      testPencil.write('hello there. this is a test');
      expect(paper.currentWriting).toEqual('hello there                ');
    });
    it('the sharpen method in pencil function storage should be accessible via a pencil object', function() {
      expect(typeof testPencil.sharpen).toEqual("function");
    });
    it('the sharpen method will reset the number of characters written to 0', function() {
      testPencil.write('sup nerd');
      expect(testPencil.numberOfCharactersWritten).toEqual(7);
      testPencil.sharpen();
      expect(testPencil.numberOfCharactersWritten).toEqual(0);
    });
    it('the pencil can be created with any point durability value', function() {
      let pointDurabilityTestPencil = new Pencil(20);
      expect(pointDurabilityTestPencil.degradationLimit).toEqual(20);
    });
  });
})();
