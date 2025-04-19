import { ToastContainer , toast} from "react-toastify";
import Card from "../card/Card";
import isWinner from "../../helpers/checkWinner";
import './Grid.css'
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react'


function Grid({numberOfCards}) {
    
    const [turn, setTurn] = useState(true); // false --> X, ture ==> 0
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [winner, setWinner] = useState(null);

    

    function play(index) {
        if (board[index] !== "" || winner) return; // prevent playing on filled cell or after game end
    
        const newBoard = [...board];
        newBoard[index] = turn ? "O" : "X";
    
        const currentSymbol = turn ? 'O' : 'X';
        const win = isWinner(newBoard, currentSymbol);
    
        if (win) {
            setWinner(win);
            toast(`Congrats ${win} won the game`);
        } else if (!newBoard.includes("")) {
            setWinner("Draw");
            toast("It's a draw!");
        }
    
        setBoard(newBoard);
        setTurn(!turn);
    }
    
    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }
   

    return (
        <div className="grid-wrapper">
            <ToastContainer position="top-right" />
        {winner && (
            <>
            <div className="winner-reset-section">
            <h1 className="turn-highlight" >Winner is {winner}</h1> 
            <button className="reset" onClick={reset}>Reset Game</button>
            
            </div>
            
            
            </>
            )}
        
         <h1 className="turn-highlight"> {winner
    ? winner === "Draw"
      ? "Game ended in a Draw"
      : `Winner is ${winner}`
    : `Current Turn: ${turn ? 'O' : 'X'}`
  }</h1>
        <div className="grid">
    
        
        {board.map((value, idx) => {
            return <Card onPlay={play} player={value}   key={idx} index={idx} />
        })}
            

        </div>

        </div>
       
    )
}


export default Grid;