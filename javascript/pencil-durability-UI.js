
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
