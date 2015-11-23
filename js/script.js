var ticTacToe = {
	board: {
			row0: ["-","-","-"],
			row1: ["-","-","-"],
			row2: ["-","-","-"]
	},

	players: {
		player1: "o",
		player2: "x"
	},

	gameOver: false,
	turn: false,
	playerTurn: "player1",

	clearBoard: function() {
		for (var row in this.board) {
			for (var i = 0; i < this.board[row].length; i++) {
				this.board[row][i] = "-";
			}
		}

		this.playerTurn = "player1";
		this.turn = false;
	},

	placePiece: function(row, col) {
		this.board[row][col] = this.players[this.playerTurn];
		this.turn = true;
	},

	play: function() {
		if (this.turn && this.playerTurn === "player1") {
			this.turn = false;
			this.playerTurn = "player2";
		}

		else if (this.turn && this.playerTurn === "player2") {
			this.turn = false;
			this.playerTurn = "player1";
		}
	},

	checkRow: function(player, row) {
		var count = 0;

		for (var i = 0; i < this.board[row].length; i++) {
			if (this.board[row][i] === player) {
				count++;
			}
		}

		return count === 3;
	},

	checkColumn: function(player, row, col) {
		var count = 0;

		for (var row in this.board) {
			if (this.board[row][col] === player) {
				count++;
			}
		}

		return count === 3;
	},

	checkDiagonals: function(player) {
		var count = 0;

		if ( 
			(this.board["row0"][0] === player && this.board["row1"][1] === player && this.board["row2"][2] === player) ||
			(this.board["row0"][2] === player && this.board["row1"][1] === player && this.board["row2"][0] === player) 
			) {
			return true;
		}
	},

	checkWin: function(player, row, col) {
		var player = this.players[player];

		if (this.checkRow(player, row) || this.checkColumn(player, row, col) || this.checkDiagonals(player) ) {
			return true;
		}
		return false;
	}
}