import React from 'react'

const Square = ( {value, onSquareClick} ) => {
  const textColor = value === 'X' ? 'text-red-400' : (value === 'O' ? 'text-blue-400' : 'text-gray-300');

  return (
    <button
      className={`w-[90px] h-[90px] text-6xl font-extrabold flex items-center justify-center border-2 border-purple-500 bg-purple-700 hover:bg-purple-600 active:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75 transition-all duration-200 ease-in-out ${textColor} relative overflow-hidden`}
      onClick={onSquareClick}
    >
      {value && (
        <span className="animate-pop-in">
          {value}
        </span>
      )}
    </button>
  )
}

export default Square