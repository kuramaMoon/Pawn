// import React, { useState } from "react";

// function ChessBoard() {
//   const squares = [];
//   for (let row = 0; row < 8; row++) {
//     for (let col = 0; col < 8; col++) {
//       const isBlack = (row + col) % 2 === 1;
//       const chessGramoteList = ["a", "b", "c", "d", "e", "f", "g", "h"]
//       console.log(isBlack)

//       if(row === 7){
//         let currentLetter_chessGramoteList = chessGramoteList[col]
//         if(isBlack){
//             squares.push(   
//                 <div 
//                   key={`${row}-${col}`}
//                   className={isBlack ? "blackSquare" : "whiteSquare"}
//                 >
//                   <p>{currentLetter_chessGramoteList}</p>
//                 </div>
//               );
//         } else{
//             squares.push(   
//                 <div 
//                   key={`${row}-${col}`}
//                   className={isBlack ? "blackSquare" : "whiteSquare"}
//                 >
//                   <p>{currentLetter_chessGramoteList}</p>
//                 </div>
//               );
//         }

//       }
//       if(col === 0){
//         console.log(col)
//         if(isBlack){
//             squares.push(   
//                 <div 
//                   key={`${row}-${col}`}
//                   className={isBlack ? "blackSquare" : "whiteSquare"}
//                 >
//                   <p className="blockTextWhite">{row+1}</p>
//                 </div>
//               );
//         } else{
//             console.log("kiri")
//             squares.push(   
//                 <div 
//                   key={`${row}-${col}`}
//                   className={isBlack ? "blackSquare" : "whiteSquare"}
//                 >
//                   <p className="blockTextBlack">{row+1}</p>
//                 </div>
//               );
//         }
//       } else{
//         squares.push(
//             <div 
//               key={`${row}-${col}`}
//               className={isBlack ? "blackSquare" : "whiteSquare"}
//             >
//             </div>
//           );
//       }
//     }
//   }

//   return (
//     <div className="chessBoard" id="mainDivStorageOf_chessBoard">
//       {squares}
//     </div>
//   );
// }

// export default ChessBoard;


import React from "react";

function ChessBoard() {
//white look
  const squares = [];
  const chessGramoteList = ["h", "g", "f", "e", "d", "c", "b", "a"];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isBlack = (row + col) % 2 === 1;
      const squareClassName = isBlack ? "blackSquare" : "whiteSquare";

      let content = null;
        console.log(col, row)
      // addition of chess note
      if (row === 7) {
        content = <p className={isBlack ? "blockTextWhiteLET" : "blockTextBlackLET"}>{chessGramoteList[col]}</p>;
      }

      // addition of chess numbers on the side
      else if (col === 0) {
        content = (
          <p className={isBlack ? "blockTextWhiteNUM" : "blockTextBlackNUM"}>
            {row + 1}
          </p>
        );
      } else if(col === 0 && row === 7){
        console.log("kie")
            content =(
                <div>
                    <p className={isBlack ? "blockTextWhiteLET" : "blockTextBlackLET"}>{chessGramoteList[col]}</p>;
                    <p className={isBlack ? "blockTextWhiteNUM" : "blockTextBlackNUM"}>
                        {row + 1}
                    </p>
                </div>
            );
      }

      squares.push(
        <div key={`${row}-${col}`} className={squareClassName}>
          {content}
        </div>
      );
    }
  }

  return <div className="chessBoard" id="mainDivStorageOf_chessBoard">{squares}</div>;
}

export default ChessBoard;
