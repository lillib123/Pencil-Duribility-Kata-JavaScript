(function () {
  'use strict';

  describe('Pencil Durability code kata unit tests', function () {

    let testPencil;

    beforeEach(function() {
      testPencil = new Pencil();
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
  });
})();
