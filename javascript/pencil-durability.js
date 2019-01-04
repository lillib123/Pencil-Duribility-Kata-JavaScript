
function Pencil(degradationValue = 10, remainingLength = 5) {
  const currentPencil = Object.create(pencilFunctionStorage);
  currentPencil.numberOfCharactersWritten = 0;
  currentPencil.degradationLimit = degradationValue;
  currentPencil.remainingPencilLength = remainingLength;
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
  erase: function(stringToErase) {
    let startOfString = paper.currentWriting.lastIndexOf(stringToErase);
    let endOfString = startOfString + stringToErase.length;
    paper.currentWriting = paper.currentWriting.substring(0,startOfString) + paper.currentWriting.substring(endOfString,paper.currentWriting.length);
  }
}
