import React, { Component } from 'react';
import './next.css';

class NextButton extends Component {
  constructor(props){
    super(props);

    this.drawCard = this.drawCard.bind(this);

    }

    drawCard() {
      this.props.drawCard();

    }

  render(props){
    return(
      <div className="buttonContainer">
        <button className="btn" onClick={this.drawCard}>Next Card</button>
      </div>
    )
  }
}



export default NextButton;
