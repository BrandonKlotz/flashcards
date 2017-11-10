import React, { Component } from 'react';
import './App.css';
import Card from './card';
import NextButton from './next';
import ShowButton from './show';

class App extends Component {
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {id: 1, question: 'Is React Easy', answer: 'no'},
        {id: 2, question: 'Is Redux Easy', answer: 'no'},
        {id: 1, question: 'Is Vanilla Javascript Easy', answer: 'yes'},
        {id: 2, question: 'Is JQuery Easy', answer: 'yes'},
        {id: 1, question: 'Is Angular Easy', answer: 'idk'},
        {id: 2, question: 'Is HTML Easy', answer: 'yes'}
      ],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card);
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card
            question={this.state.currentCard.question}
            answer={this.state.currentCard.answer}
          />
        </div>
        <div className="buttonRow">
          <NextButton
            drawCard={this.updateCard}
          />
          <ShowButton />
        </div>
      </div>
    );
  }
}

export default App;
