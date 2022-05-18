import React, {Component} from "react";
import Box from './Box.js';
import './Table.css'
class Table extends Component {
    static defaultProps = {
        Nrows: 5,
        Ncoloms: 5,
        win_rate: 0.25
    }

    constructor(props){
        super(props)
        this.state = {myArray: this.makeTable(), hasWon: false}
        this.makeTable = this.makeTable.bind(this) 
        this.change_table = this.change_table.bind(this)
        this.display_table = this.display_table.bind(this)
    }

    

    makeTable() {
        let arr = []
        for(let i = 0; i < this.props.rows; i++){
            
            arr[i] = [];
            
            for(let j = 0; j < this.props.coloms; j++){
                arr[i][j] = Math.random() < this.props.win_rate
            }
        }
        return arr
    }

    change_table(row, col) {
        let { Nrows, Ncoloms,  } = this.props

        const org = [...this.state.myArray]
        let arr = org 
       
        function flip_value(row, col){
        
            if(row >= 0 && row < Nrows && col >= 0 && col < Ncoloms){
                arr[row][col] = !arr[row][col]
            }
        }
        flip_value(row, col)
        flip_value(row - 1, col)
        flip_value(row + 1, col)
        flip_value(row, col + 1)
        flip_value(row, col - 1)
        
        let hasWon = arr.every(row =>  row.every(col => !col))
        this.setState({myArray: arr, hasWon: hasWon})
    }
    display_table() {
        return (
            <table className="container">
                {this.state.myArray.map((arr, row) => {
                    return arr.map( (arr, col) => {
                        const code = `${row}-${col}` 
                        return (
                            <tbody className="row-container">
                                <Box 
                                    key = {code}
                                    active = {arr}
                                    func = {this.change_table}
                                    row = {row} 
                                    col = {col} 
                                />    
                            </tbody>
                        )
                    })
                })}
            </table>
        )
    }
    
    render() {
        console.log(this.state.hasWon)
        return (
            <div>
                {!this.state.hasWon ? (
                    <div>
                        <div className="neon-orange"> Lights out</div>
                        {this.display_table()}
                    </div>
                    )
                : (
                    <div>
                        <div className="neon-blue"> You lose</div>
                    </div>
                )}
            </div>
        )
    }
}
export default Table; 