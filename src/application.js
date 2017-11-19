$(document).ready(function() {
  $(document).on("keyup", function(e) {
    var board = new Board($(".board"));
    board.parseIntoArrays();

    game = new Game(board.parsedBoard);
    if (e.which == 38) {
      game.shiftUp();

    } else if (e.which == 40) {
      game.shiftDown();

    } else if (e.which == 37) {
      game.shiftLeft();

    } else if (e.which == 39) {
      game.shiftRight();
    }

    board.parsedBoard = game.result;

    board.appendToPage();

    if (game.isWon()) {
      $(".won").show();
    }

    if (!(game.isInProgress())) {
        $(".lost").show();
    }
  });
});
