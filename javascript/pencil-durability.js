
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
    paper.currentWriting += textToAddToPaper;
    this.numberOfCharactersWritten += textToAddToPaper.replace(/ /g,'').match(/\w*/)[0].length;
  }
}
