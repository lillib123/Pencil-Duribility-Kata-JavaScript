
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
    const numberOfCharactersExcludingWhiteSpace = textToAddToPaper.replace(/ /g,'').match(/[ A-Za-z0-9_@./#&+-/!]*/g)[0].length;
    if (this.numberOfCharactersWritten + numberOfCharactersExcludingWhiteSpace > this.degregationLimit) {
      let numberOfCharactersOverLimit = (this.numberOfCharactersWritten + numberOfCharactersExcludingWhiteSpace - this.degregationLimit);
      textToAddToPaper = textToAddToPaper.slice(0, -numberOfCharactersOverLimit) + " ".repeat(numberOfCharactersOverLimit);
      this.numberOfCharactersWritten = this.degregationLimit;
    } else {
      this.numberOfCharactersWritten += numberOfCharactersExcludingWhiteSpace;
    }
    paper.currentWriting += textToAddToPaper;
  }
}
