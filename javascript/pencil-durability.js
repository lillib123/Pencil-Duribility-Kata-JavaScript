
function Pencil(degradationValue = 100, remainingLength = 50, eraserDurability = 100) {
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

//event listener
let currentPencil = new Pencil();

init();

$('.create-pencil').on('click', function() {
  currentPencil = new Pencil();
  init();
});

$('.submit-text').on('click', function() {
  currentPencil.write($('.user-writing').val());
  $('.user-writing').val('');
  updatePaperWriting();
  updateRemainingDurability();
});

$('.sharpen-pencil').on('click', function() {
  currentPencil.sharpen();
  updateRemainingDurability();
  updateRemainingPencilLength();
});

$('.erase').on('click', function() {
  if ($("#also-replace").is(":checked") && $(".also-replace-with").val()) {
    currentPencil.erase($(".user-erase").val(), true, $(".also-replace-with").val());
  } else {
    currentPencil.erase($(".user-erase").val());
  }
  $(".user-erase").val("");
  $("#also-replace").val("");
  updatePaperWriting();
  updateRemainingEraserDurability();
});

//function definitions
function init() {
  updateRemainingDurability();
  updateRemainingPencilLength();
  updateRemainingEraserDurability();
}
function updatePaperWriting() {
  $('.paper').text(paper.currentWriting);
}
function updateRemainingDurability() {
  $('.remaining-durability').text("Remaining durability: " + (currentPencil.degradationLimit - currentPencil.numberOfCharactersWritten) + " characters until you will need to sharpen your pencil or get a new one");
}
function updateRemainingPencilLength() {
  $('.remaining-length').text("Remaining length: " + (currentPencil.remainingPencilLength) + " sharpens until the pencil is gone forever");
}
function updateRemainingEraserDurability() {
  $('.remaining-eraser').text("Remaining eraser durability: " + (currentPencil.remainingEraserDurability) + " characters before you have no more take-backsies");
}
