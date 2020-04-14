import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={() => props.callback(props.index, "XX")}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    fillSq(i, value) {
        console.log(i)
        const sq = this.state.squares.slice();
        sq[i] = (this.state.xIsNext ? '' : 'YY') + (this.state.xIsNext ? value : '');
        this.setState({
            squares: sq,
            xIsNext: !this.state.xIsNext,
        })
    }

    renderSquare(i) {
        return <Square
            index={i}
            value={this.state.squares[i]}
            callback={(index, value) => this.fillSq(index, value)}/>;
    }

    render() {
        const status = 'Следующий ход: ' + (this.state.xIsNext ? "игрок икс" : "игрок игрек");
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
