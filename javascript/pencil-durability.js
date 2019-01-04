
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
      if (this.numberOfCharactersWritten < this.degradationLimit) {
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
    this.numberOfCharactersWritten = 0;
  }
}
