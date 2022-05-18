import React, {Component} from 'react'; 
import './Box.css'
class Box extends Component {
    
    static defaultProps = {

    }
    constructor(props){
        super(props)
        this.handle_click = this.handle_click.bind(this) 
    
    }
    handle_click() {
        this.props.func(this.props.row, this.props.col)
    }
    render(){
        return (
            <div onClick = {this.handle_click} className = {this.props.active ? ' active ' : ' un-active ' } ></div>
        )
    }
}

export default Box; 