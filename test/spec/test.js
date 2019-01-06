(function () {
  'use strict';

  describe('Pencil Durability code kata unit tests', function () {

    let testPencil;

    beforeEach(function() {
      testPencil = new Pencil();
      paper.currentWriting = "";
    });

    afterEach(function() {
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
    it('a new pencil should start with a default degradation limit of 100', function() {
      expect(testPencil.degradationLimit).toEqual(100);
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
      testPencil.write("a".repeat(120));
      expect(paper.currentWriting).toEqual("a".repeat(100) + " ".repeat(20));
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
    it('default pencil length should be 50', function() {
      expect(testPencil.remainingPencilLength).toEqual(50);
    });
    it('the pencil can be created with any initial length', function() {
      let lengthTestPencil = new Pencil(undefined, 10);
      expect(lengthTestPencil.remainingPencilLength).toEqual(10);
    });
    it('if the pencil with length 50 is sharpened 5 times it will have a length of 45', function() {
      testPencil.sharpen();
      testPencil.sharpen();
      testPencil.sharpen();
      testPencil.sharpen();
      testPencil.sharpen();
      expect(testPencil.remainingPencilLength).toEqual(45);
    });
    it('a pencil object with length 0 will only write spaces', function() {
      let lengthZeroTestPencil = new Pencil(undefined, 0);
      lengthZeroTestPencil.write("test");
      expect(paper.currentWriting).toEqual("    ");
    });
    it('the erase method in pencil function storage should be accessible via a pencil object', function() {
      expect(typeof testPencil.erase).toEqual("function");
    });
    it('the erase function will remove the last occurence of the specified string from the current writing on the paper object', function() {
      let pencilEraseTest = new Pencil(100,undefined);
      pencilEraseTest.write("wherever you go, there you are.");
      expect(paper.currentWriting).toEqual("wherever you go, there you are.");
      pencilEraseTest.erase("you");
      expect(paper.currentWriting).toEqual("wherever you go, there     are.")
    });
    it('the pencil can be created with any point durability value', function() {
      let pointDurabilityTestPencil = new Pencil(20);
      expect(pointDurabilityTestPencil.degradationLimit).toEqual(20);
    });
    it('a new pencil should start with a default eraser durability limit of 100', function() {
      expect(testPencil.remainingEraserDurability).toEqual(100);
    });
    it('the pencil can be created with any initial eraser durability', function() {
      let eraserDurabilityTestPencil = new Pencil(undefined, undefined, 100);
      expect(eraserDurabilityTestPencil.remainingEraserDurability).toEqual(100);
    });
    it('passing the erase function 2 character will cause the eraser durability to decrease by 2', function() {
      testPencil.write("hi hi hi");
      testPencil.erase("hi");
      expect(testPencil.remainingEraserDurability).toEqual(98);
    });

    it('Erasing "you" and replacing it with "banana" from a paper that has writing "wherever you go, there you are" will modify paper to read "wherever you go, there bana@@e."', function() {
      let replaceTestPencil = new Pencil(100, 100, 100);
      replaceTestPencil.write("wherever you go, there you are.");
      replaceTestPencil.erase("you", true, "banana");
      expect(paper.currentWriting).toEqual("wherever you go, there bana@@e.");
    });
  });
})();
