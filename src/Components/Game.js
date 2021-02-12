import Board from './Board';
import { useState, useEffect } from 'react'
export default function Game() {

    const [player, setPlayer] = useState("x")
    const [board, setBoard] = useState(Array(9).fill(null))
    const [winner, setWinner] = useState("None")

    const winnerPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]


    useEffect(() => {
        checkWinner()
    }, [board])

    function handleClick(index) {
        let copy = [...board];
        copy[index] = player
        setBoard(copy)
    }
    useEffect(() => {
        console.log(winner)
    }, [winner])

    function checkWinner() {
        winnerPattern.forEach((item) => {
            const a = board[item[0]];
            const b = board[item[1]];
            const c = board[item[2]];

            if ((a === b) && (b === c)) {
                if (a === 'x' || b === 'o') {
                    setWinner(player)
                } 
            } else {
                setPlayer(player === 'x' ? 'o' : 'x')
            }
        })
    }

    function newgame() {
        setBoard(Array(9).fill(null))
        setWinner('None')
    }

    return (
        <div>
            Winner:{' ' + winner}
            <Board board={board} handleClick={handleClick} disabled={winner!=="None"}/>
            <button onClick={newgame}> New game</button>
        </div>
    )
}