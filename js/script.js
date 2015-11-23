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
	}
}