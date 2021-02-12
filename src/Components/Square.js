import './Square.css';

export default function Square({onClick,value, disabled}) {

    return(
        <button className="button" onClick={onClick} disabled={disabled}>
            {value}
        </button>
    )
}