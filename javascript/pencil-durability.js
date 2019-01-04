
function Pencil(degradationValue = 10, remainingLength = 5, eraserDurability = 10) {
  const currentPencil = Object.create(pencilFunctionStorage);
  currentPencil.numberOfCharactersWritten = 0;
  currentPencil.degradationLimit = degradationValue;
  currentPencil.remainingPencilLength = remainingLength;
  currentPencil.remainingEraserDurability = eraserDurability;
  return currentPencil;
}

const paper = {
  currentWriting: ""
}

const pencilFunctionStorage = {
  write: function(textToAddToPaper) {
    for (let i=0; i<textToAddToPaper.length; i++) {
      if (this.numberOfCharactersWritten < this.degradationLimit && this.remainingPencilLength > 0) {
        paper.currentWriting += textToAddToPaper[i];
        if (textToAddToPaper[i] != " ") {
          this.numberOfCharactersWritten++;
        }
      } else {
        paper.currentWriting += " ";
      }
    }
  },
  sharpen: function() {
    if (this.remainingPencilLength > 0) {
      this.numberOfCharactersWritten = 0;
      this.remainingPencilLength--;
    }
  },
  erase: function(stringToErase, alsoReplace = false, stringToAdd = "") {
    String.prototype.replaceAt = function(index, replacementString) {
        return this.substr(0, index) + replacementString + this.substr(index + replacementString.length);
    }
    let startOfString = paper.currentWriting.lastIndexOf(stringToErase);
    let endOfString = startOfString + stringToErase.length;
    for (let i=endOfString-1; i>=startOfString; i--) {
      if (this.remainingEraserDurability > 0 && paper.currentWriting[i] != " ") {
        paper.currentWriting = paper.currentWriting.replaceAt(i, " ");
        this.remainingEraserDurability--;
      }
    }
    if (alsoReplace && stringToAdd) {
      let currentCharacterIndex = 0;
      for (var i=startOfString; i<startOfString + stringToAdd.length; i++) {
        if (paper.currentWriting[i] != " ") {
          paper.currentWriting = paper.currentWriting.replaceAt(i, "@");
        } else if (paper.currentWriting.length < this.degradationLimit) {
          paper.currentWriting = paper.currentWriting.replaceAt(i, stringToAdd[currentCharacterIndex]);
          currentCharacterIndex++;
          this.numberOfCharactersWritten++;
        } else {
          break;
        }
      }
    }
  }
}
