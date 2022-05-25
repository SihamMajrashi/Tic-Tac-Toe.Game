console.log('Week 4 - Day 4')

console.log('Tuwaiq Academy   JS')

$(document)
  .ready(function() {

    /*
       1. GRID LAYOUT 'HTML & CSS'
       2. when player click on th cell apper (X || O)
       3. after the first click switch player
       4. when the player select 3 cells wins
       5. show winner and button to play agin

    */

    const cells = $(".cell");
    const winnerSpan = $("#winner");
    const turnSpan = $("#turn");
    const winnerPar = $("#pWinner");
    const turnPar = $("#pTurn");
    const restartButton = $("#restart");

    //console.log(cells);


    let turn = "X";
    const O = "O";
    const X = "X";

    cells.click(cellClicked);
    restartButton.click(restartTheGame);

    winnerPar.hide();
    restartButton.hide();

    function cellClicked() {
      // console.log(this);
      // this => DOM
      if ($(this)
        .text() === "") {
        if (turn === X) {
          $(this)
            .text(X);
          turnSpan.text(O);
          checkWinner(X);
          turn = O;
        } else {
          $(this)
            .text(O);
          turnSpan.text(X);
          checkWinner(O);
          turn = X;
        }
        // checkWinner(turn);  next player
      } else {
        $(this)
          .css("background-color", "red");
        setTimeout(() => {
          $(this)
            .css("background-color", "white");
        }, 250);
      }
    }

    function restartTheGame() {
      console.log("restart called");
      location.reload();
    }

    function checkWinner(currentPlayer) {
      /* - | \ /
      0 1 2
      3 4 5
      6 7 8
      */
      // console.log(cells);
      // Check Horizontal
      if (
        $(cells[0])
        .text() === $(cells[1])
        .text() &&
        $(cells[1])
        .text() === $(cells[2])
        .text() &&
        $(cells[0])
        .text() !== ""
      ) {
        playerWin(currentPlayer);
      } else if (
        $(cells[3])
        .text() === $(cells[4])
        .text() &&
        $(cells[4])
        .text() === $(cells[5])
        .text() &&
        $(cells[3])
        .text() !== ""
      ) {
        playerWin(currentPlayer);
      } else if (
        $(cells[6])
        .text() === $(cells[7])
        .text() &&
        $(cells[7])
        .text() === $(cells[8])
        .text() &&
        $(cells[6])
        .text() !== ""
      ) {
        playerWin(currentPlayer);
        // Start check Vertical
      } else if (
        $(cells[0])
        .text() === $(cells[3])
        .text() &&
        $(cells[3])
        .text() === $(cells[6])
        .text() &&
        $(cells[0])
        .text() !== ""
      ) {
        playerWin(currentPlayer);
      } else if (
        $(cells[1])
        .text() === $(cells[4])
        .text() &&
        $(cells[4])
        .text() === $(cells[7])
        .text() &&
        $(cells[1])
        .text() !== ""
      ) {
        playerWin(currentPlayer);
      } else if (
        $(cells[2])
        .text() === $(cells[5])
        .text() &&
        $(cells[5])
        .text() === $(cells[8])
        .text() &&
        $(cells[2])
        .text() !== ""
      ) {
        playerWin(currentPlayer);
        // Diagonal  0 4 8   2 4 6
      } else if (
        $(cells[0])
        .text() === $(cells[4])
        .text() &&
        $(cells[4])
        .text() === $(cells[8])
        .text() &&
        $(cells[0])
        .text() !== ""
      ) {
        playerWin(currentPlayer);
      } else if (
        $(cells[2])
        .text() === $(cells[4])
        .text() &&
        $(cells[4])
        .text() === $(cells[6])
        .text() &&
        $(cells[2])
        .text() !== ""
      ) {
        playerWin(currentPlayer);
      } else {
        // Do nothing
        // you need do think about for draw
        // console.log('DRAW');
      }
    }

    function playerWin(theWinner) {
      winnerSpan.text(theWinner);

      turnPar.hide(1000);
      winnerPar.show(1000);
      restartButton.show(2000);
    }
  });