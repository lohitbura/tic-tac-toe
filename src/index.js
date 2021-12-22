import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
    
    render(){
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

class Board extends react.Component{
    renderSquare(i){
        return <Square value = {i} />
    }

    render(){
        return (
            <div>
                <div className="board-row">
                        
                     </div> 
             </div>
        );
    }
}

class Game extends react.Component{

}