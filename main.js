var board = [
[null, 2, null, null, 7, null, 5, null, 3],
[7, 5, null, 9, 4, null, null, null, null],
[null, 6, 1, 2, null, null, 4, null, 7],
[2, 8, null, 5, null, null, 7, null, null],
[null, null, 7, null, null, null, 1, null, null],
[null, null, 5, null, null, 6, null, 8, 4],
[4, null, 2, null, null, 7, 8, 6, null],
[null, null, null, null, 6, 2, null, 4, 1],
[6, null, 9, null, 8, null, null, 7, null],
];
function getSquareFromCoordinate (x,y) {
	var column = parseInt(x/3, 10);
	var row = parseInt(y/3, 10);
	return row*3 + column;
}

function printBoard() {
var output = '';
	for (var y=0; y<board.length; y++) {
		var row = board[y];
		for (var x=0; x<row.length; x++) {
			
		}
	}


}

var squares = [];
var columns = [];

for (var y=0; y<board.length; y++) {

	var row = board[y];
	for (var x=0; x<row.length; x++) {
		var squarenumber = getSquareFromCoordinate(x,y);
		var currentnumber = board[y][x];

		if (squares[squarenumber] == undefined) {
			squares[squarenumber] = [];
		}
		squares[squarenumber].push(currentnumber);
		if (columns[x] == undefined) {
			columns[x] = [];
		}
		columns[x].push(currentnumber);
		//console.log('( '+x+' , ' +y+') = '+squarenumber);
	}
}
console.log("BEFORE ");
console.log(board);

for (var y=0; y<board.length; y++) {

	var row = board[y];

	for (var x=0; x<row.length; x++) {
		var currentNumber = board[y][x];
		var column = columns[x];
		var squarenumber = getSquareFromCoordinate(x,y);
		var square = squares[squarenumber];
		if (currentNumber == null) {
			var possible = [];
			for (var i=1; i<10; i++) {
				//if number is NOT in row, add it to possibilities
				if (row.indexOf(i) == -1) {
					possible.push(i);
				}
				//if number is NOT in column AND NOT already in possibility array, then add it
				if (column.indexOf(i) == -1) {
					if (possible.indexOf(i) == -1){
					possible.push(i);
					}
				//if number IS in column AND if it IS in possibility array, take it out 	
				} else if (possible.indexOf(i) > -1) {
					possible.splice(possible.indexOf(i),1);
				}
				
				//if number is NOT in square AND NOT already in possibility array, then add it
				if (square.indexOf(i) == -1) {
					if (possible.indexOf(i) == -1){
						possible.push(i);
					}

				//if number IS in square, and is in possibility array, take it out
				} else if (possible.indexOf(i) > -1) {
					possible.splice(possible.indexOf(i),1);
				}
			}
			if (possible.length==1) {
				board[y][x]= possible[0];
			}
		}		
	}
}
console.log("AFTER");
console.log(board);

