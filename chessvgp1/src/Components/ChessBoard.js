import React from "react";

function ChessBoard() {
  let cyclicalCounter = 1;
  const squares = [];
  const chessGramoteList = ["h", "g", "f", "e", "d", "c", "b", "a"];

  // Update the function to receive the event parameter

  // if square is clicked, id is printed
  const ifChessSquareClicked = (event) => {
    // Log the id of the clicked element
    console.log(event.target.id);
  };

    

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isBlack = (row + col) % 2 === 1;
      const squareClassName = isBlack ? "blackSquare" : "whiteSquare";

      let content = null;

      // Addition of chess note
      if (row === 7) {
        content = (
          <p className={isBlack ? "blockTextWhiteLET" : "blockTextBlackLET"}>
            {chessGramoteList[col]}
          </p>
        );
      }

      // Addition of chess numbers on the side
      else if (col === 0) {
        content = (
          <p className={isBlack ? "blockTextWhiteNUM" : "blockTextBlackNUM"}>
            {row + 1}
          </p>
        );
      } else if (col === 0 && row === 7) {
        console.log("kie");
        content = (
          <div>
            <p className={isBlack ? "blockTextWhiteLET" : "blockTextBlackLET"}>
              {chessGramoteList[col]}
            </p>
            <p className={isBlack ? "blockTextWhiteNUM" : "blockTextBlackNUM"}>
              {row + 1}
            </p>
          </div>
        );
      }

      squares.push(
        <div
          key={`${row}-${col}`}
          className={squareClassName}
          id={cyclicalCounter} // Assign unique id to each square
          onClick={ifChessSquareClicked} // Handle click event
        >
          {content}
        </div>
      );
      cyclicalCounter++;
    }
  }

  return (
    <div className="chessBoard" id="mainDivStorageOf_chessBoard">
      {squares}
    </div>
  );
}

export default ChessBoard;
