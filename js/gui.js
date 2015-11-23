var resetBoard = function(i, item) {
	$(item).html("");
}

var playerName = function(name) {
	if (name === "player1") {
		return "Player 1";
	}
	else {
		return "Player 2";
	}
}

$(document).ready(function() {

	$("#turn").html(playerName(ticTacToe.playerTurn) + "'s turn");

	$(".tile").on("click", function() {
		if ($(this).html() === "") {
			var row = $(this).parent().attr("id");
			var col = parseInt($(this).attr("id"));

			$(this).html(ticTacToe.players[ticTacToe.playerTurn]);
			ticTacToe.placePiece(row, col);

			if (ticTacToe.checkWin(ticTacToe.playerTurn, row, col)) {
				var winMessage = $("<h1/>");
				winMessage.attr("id", "winMessage");
				winMessage.html(playerName(ticTacToe.playerTurn) + " wins!");
				$("#board").children().hide();
				$("#board").append(winMessage);
			}

			else {
				ticTacToe.play();
				$("#turn").html(playerName(ticTacToe.playerTurn) + "'s turn");
			}
		}

	});

	$("#reset").on("click", function() {
		ticTacToe.clearBoard();
		$("#winMessage").remove();
		$("#turn").html(playerName(ticTacToe.playerTurn) + "'s turn");
		$(".tile").each(resetBoard);
		$("#board").children().show();
	});
});