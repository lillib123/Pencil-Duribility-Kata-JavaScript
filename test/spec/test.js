(function () {
  'use strict';

  describe('Pencil Durability code kata unit tests', function () {
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
      let testPencil = new Pencil();
      expect(testPencil.write).toBe(true);
    })
  });
})();
