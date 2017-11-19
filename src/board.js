function Board(data) {
  this.data = data;
  this.parsedBoard = [];
}

Board.prototype.transpose = function() {
  var newBoard = [[], [], [], []];
  for(var i=0; i < this.parsedBoard.length; i++) {
    var row = this.parsedBoard[i];
    for (var j=0; j < row.length; j++) {
      newBoard[j].push(row[j]);
    }
  }
  this.parsedBoard = newBoard;
}

Board.prototype.parseIntoArrays = function() {
  var row0 = this.data.find(".row")[0];
  var row1 = this.data.find(".row")[1];
  var row2 = this.data.find(".row")[2];
  var row3 = this.data.find(".row")[3];

  var rows = [row0, row1, row2, row3]
  var returningBoard = []

  for (var i=0; i < rows.length; i ++) {
    var tiles = $(rows[i]).find(".tile");
    var rowTiles = []
    for (var j=0; j < tiles.length; j++) {
      var tileData = $(tiles[j]).text();
      if (tileData != "") {
        tileData = parseInt(tileData);
      }
      rowTiles.push(tileData);
    }
    returningBoard.push(rowTiles);
  }
  this.parsedBoard = returningBoard;
}

Board.prototype.appendToPage = function() {
  $(".tile").empty();
  $(".tile").attr("id", "");

  for (var i=0; i < this.parsedBoard.length; i++) {
    var htmlRow = $(".row." + i);
    var arrayRow = this.parsedBoard[i];
    var tiles = htmlRow.find(".tile");
    for (var j=0; j < arrayRow.length; j++) {
      var item = arrayRow[j];

      var tile = tiles[j];
      var id = "t" + item;
      $(tile).text(item);
      $(tile).attr("id", id);
    }
  }
}
