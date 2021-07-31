import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
        }
        increaseNum = () =>{
            this.setState({
                age: this.state.age + 1
            })
        
    }
    render() {
        return (
            <div>
            <h1>{this.props.firstname}, {this.props.lastname}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.haircolor}</p>
             <button onClick={this.increaseNum}>Birthday Button for {this.props.firstname} {this.props.lastname}</button>
            </div>
        )
    }
}

export default Card
