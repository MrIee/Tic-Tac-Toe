var resetBoard = function(i, item) {
	$(item).html("");
}

$(document).ready(function() {

	$(".tile").on("click", function() {
		var row = $(this).parent().attr("id");
		var col = $(this).attr("id");
		ticTacToe.placePiece(row, col);
		$(this).html(ticTacToe.players[ticTacToe.playerTurn]);
		ticTacToe.play();
	});

	$("#reset").on("click", function() {
		ticTacToe.clearBoard();

		$(".tile").each(resetBoard);
	});
});