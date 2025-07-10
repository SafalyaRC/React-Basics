import React from 'react'
import Square from './Square'
import { useState } from 'react'

const Board = () => {
  const [squares, setSquares]=useState(Array(9).fill(null));
  const [xNext, setXNext]=useState(true);


  const handleClick= (i)=>{
    if (checkWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares=squares.slice();
    if(xNext){
      nextSquares[i]='X'
    } else{
      nextSquares[i]='O'
    }
    setSquares(nextSquares);
    setXNext(!xNext);
  }

  const checkWinner = (squares)=>{
    const winningIndex=[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i=0;i<winningIndex.length;i++){
      const [a,b,c]=winningIndex[i]
      if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
        return squares[a]
      }
    }
    return null;
  }

  const winner=checkWinner(squares);
  let status;
  if(winner){
    status='Winner: '+winner
  } else if (squares.every(s => s !== null)) {
    status = 'Draw!';
  }
  else{
    status='Move for: ' + (xNext?'X':'O');
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXNext(true);
  };


  return (
    <>
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 to-indigo-900 text-white font-sans p-4'>
      <div className='text-3xl font-extrabold mb-8 drop-shadow-lg text-yellow-300 animate-pulse'>{status}</div>
      <div className='grid grid-cols-3 gap-0 border-4 border-purple-400 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out'>
        {squares.map((squareValue, i) => (
          <Square key={i} value={squareValue} onSquareClick={() => handleClick(i)}/>
        ))}
      </div>
      <button
        onClick={resetGame}
        className='mt-8 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold rounded-full shadow-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75'
      >
        Reset Game
      </button>
    </div>
    </>
  )
}

export default Board
