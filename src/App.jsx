
import { useState } from 'react'
import './App.css'
import Square from './Square'


function App() {
  const [squares, setSquares] = useState(Array(9).fill("")); 
  const [count, setCount] = useState(0); 
  const [winner, setWinner]=useState();

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const handleCount = (index) => {
    
    if (squares[index] || winner) return;

    const nextSquares = squares.slice(); 
    nextSquares[index] = count % 2 === 0 ? "X" : "O"; 
    setSquares(nextSquares); 
    setCount(count + 1); 
    checkWinner(nextSquares)
  };

 function checkWinner(squares){
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      setWinner(squares[a]); 
    }
  }
 }

  return (
    
    <div id='main-div'>
      <h1 className=''>Tic-Tac-Toe Game</h1>
      { winner &&
        <h1 > Winner is {winner}</h1>
      }
      <div className='inner-div'>
      <Square value={squares[0]} handleCount={() => handleCount(0)}/>
      <Square value={squares[1]} handleCount={() => handleCount(1)}/>
      <Square value={squares[2]} handleCount={() => handleCount(2)}/>
      </div>
      
      <div className='inner-div'>
      <Square value={squares[3]} handleCount={() => handleCount(3)}/>
      <Square value={squares[4]} handleCount={() => handleCount(4)}/>
      <Square value={squares[5]} handleCount={() => handleCount(5)}/>
      
      </div>
      <div className='inner-div'>
      <Square value={squares[6]} handleCount={() => handleCount(6)}/>
      <Square value={squares[7]} handleCount={() => handleCount(7)}/>
      <Square value={squares[8]} handleCount={() => handleCount(8)}/>
      
     </div>
    
    </div>
      
  
  )
}

export default App
