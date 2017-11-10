import React, { Component } from 'react';
import './next.css';

class ShowButton extends Component {
  constructor(props){
    super(props);

    this.showAnswer = this.showAnswer.bind(this);

    }

    showAnswer() {
      this.props.showAnswer();

    }

  render(props){
    return(
      <div className="buttonContainer">
        <button className="btn" onClick={this.flipCard}>Flip Card</button>
      </div>
    )
  }
}



export default ShowButton;
