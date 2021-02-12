import Square from './Square';
import './Board.css';
export default function Board({ board, handleClick, disabled }) {

    return (
        <div id="board">
            {board.map((value, index) => {
                return <Square value={value} disabled={disabled} onClick={() => handleClick(index)} />
            })}

        </div>
    )
}