function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Game(board) {
  this.board = board;
  this.result = [];
}

Game.prototype.boardsAreEqual = function() {
  var first = this.board;
  var second = this.result;
  for (var i=0; i < this.board.length; i++) {
    var boardRow = this.board[i];
    var resultRow = this.result[i];
    for (var j=0; j < boardRow.length; j++) {
      if (boardRow[j] !== resultRow[j]) {
        return false;
      }
    }
  }
  return true;
}

Game.prototype.addRandomNum = function() {
  if (!(this.boardsAreEqual())) {
    while (true) {
      var row = getRandomInt(0, 3);
      var tile = getRandomInt(0, 3);
      if (this.result[row][tile] === "") {
        this.result[row][tile] = 2;
        break;
      }
    }
  }
}

Game.prototype.isInProgress = function() {
  for (var i=0; i < this.result.length; i++) {
    var firstCheck = this.result[i];
    for (var j=0; j < firstCheck.length; j++) {
      if (firstCheck[j] == "") {
        return true;
      }
    }
  }
  for (var k=0; k < this.result.length; k++) {
    var secondCheck = this.result[k];
    for (var l=0; l < secondCheck.length; l++) {
      if (secondCheck[l] == secondCheck[l + 1]) {
        return true;
      }
      if (k < 3) {
        if (secondCheck[l] == this.result[k + 1][l]) {
          return true;
        }
      }
    }
  }
  return false;
}

Game.prototype.isWon = function() {
  var board = [].concat.apply([], this.result);
  return board.indexOf(256) > -1;
}

Game.prototype.shiftUp = function() {
  var oldBoard = new Board;
  oldBoard.parsedBoard = this.board;
  oldBoard.transpose();
  var current = oldBoard.parsedBoard;

  var newBoard = [];
  for (var i=0; i < current.length; i++) {
    var row = current[i];
    var newRow = [];
    for (var j=0; j < row.length; j++) {
      var item = row[j]
      if (typeof item === "number") {
        newRow.push(item);
      }
    }
    var collapseRow = [];
    for (var k=0; k < newRow.length; k++) {
      if (newRow[k] === newRow[k + 1]) {
        collapseRow.push(newRow[k] + newRow[k + 1]);
        k += 1;
      } else {
        collapseRow.push(newRow[k]);
      }
    }
    while (collapseRow.length < 4) {
      collapseRow.push("");
    }
    newBoard.push(collapseRow);
  }
  var currentBoard = new Board;
  currentBoard.parsedBoard = newBoard;
  currentBoard.transpose();
  this.result = currentBoard.parsedBoard;
  this.addRandomNum();
}

Game.prototype.shiftDown = function() {
  var oldBoard = new Board;
  oldBoard.parsedBoard = this.board;
  oldBoard.transpose();
  var current = oldBoard.parsedBoard;

  var newBoard = [];
  for (var i=0; i < current.length; i++) {
    var row = current[i];
    var newRow = [];
    for (var j=0; j < row.length; j++) {
      var item = row[j]
      if (typeof item === "number") {
        newRow.push(item);
      }
    }
    newRow = newRow.reverse();
    var collapseRow = [];
    for (var k=0; k < newRow.length; k++) {
      if (newRow[k] === newRow[k + 1]) {
        collapseRow.push(newRow[k] + newRow[k + 1]);
        k += 1;
      } else {
        collapseRow.push(newRow[k]);
      }
    }
    while (collapseRow.length < 4) {
      collapseRow.push("");
    }
    collapseRow = collapseRow.reverse();
    newBoard.push(collapseRow);
  }
  var currentBoard = new Board;
  currentBoard.parsedBoard = newBoard;
  currentBoard.transpose();
  this.result = currentBoard.parsedBoard;
  this.addRandomNum();
}

Game.prototype.shiftLeft = function() {
  var newBoard = [];
  for (var i=0; i < this.board.length; i++) {
    var row = this.board[i];
    var newRow = [];
    for (var j=0; j < row.length; j++) {
      var item = row[j]
      if (typeof item === "number") {
        newRow.push(item);
      }
    }
    var collapseRow = [];
    for (var k=0; k < newRow.length; k++) {
      if (newRow[k] === newRow[k + 1]) {
        collapseRow.push(newRow[k] + newRow[k + 1]);
        k += 1;
      } else {
        collapseRow.push(newRow[k]);
      }
    }
    while (collapseRow.length < 4) {
      collapseRow.push("");
    }
    newBoard.push(collapseRow);
  }
  this.result = newBoard;
  this.addRandomNum();
}

Game.prototype.shiftRight = function() {
  var newBoard = [];
  for (var i=0; i < this.board.length; i++) {
    var row = this.board[i];
    var newRow = [];
    for (var j=0; j < row.length; j++) {
      var item = row[j]
      if (typeof item === "number") {
        newRow.push(item);
      }
    }
    newRow = newRow.reverse();
    var collapseRow = [];
    for (var k=0; k < newRow.length; k++) {
      if (newRow[k] === newRow[k + 1]) {
        collapseRow.push(newRow[k] + newRow[k + 1]);
        k += 1;
      } else {
        collapseRow.push(newRow[k]);
      }
    }
    while (collapseRow.length < 4) {
      collapseRow.push("");
    }
    collapseRow = collapseRow.reverse();
    newBoard.push(collapseRow);
  }
  this.result = newBoard;
  this.addRandomNum();
}
