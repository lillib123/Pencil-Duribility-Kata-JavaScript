
function Pencil() {
  const currentPencil = Object.create(pencilFunctionStorage);
  currentPencil.numberOfCharactersWritten = 0;
  currentPencil.degregationLimit = 10;
  return currentPencil;
}

const paper = {
  currentWriting: ""
}

const pencilFunctionStorage = {
  write: function(textToAddToPaper) {
    for (let i=0; i<textToAddToPaper.length; i++) {
      if (this.numberOfCharactersWritten < this.degregationLimit) {
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
    
  }
}
