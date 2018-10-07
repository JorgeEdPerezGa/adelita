import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard, deleteCard } from '../../actions';
import Card from '../../components/Card';
import './style.css';

class Journal extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
    this.baseState = this.state;
  }

  getDate = () => {
    let month = [
      "January", "February", "March",
      "April", "May", "June", "July", "August", "September",
      "October", "November", "December"
    ];

    let day = new Date().getDate();
    let monthIndex = new Date().getMonth();
    let year = new Date().getFullYear();
    const date = `${month[monthIndex]} ${day} ${year}`;

    return date;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCard({...this.state, id: Date.now(), date: this.getDate()});
    this.clearInputField();
  };

  renderCards = () => {
    const cards = this.props.cards;
    return cards.map((card, index) => {
      return (
        <Card
          key = {`cards${index}`}
          index = {index}
          title = {card.title}
          body = {card.body}
          date = {card.date}
          id = {card.id}
          deleteCard = {this.deleteCard}/>
      );
    });
  }

  deleteCard = (event, id) => {
    event.preventDefault();
    this.props.deleteCard(id);
  }

  clearInputField = () => {
    this.setState(this.baseState);
  }

  render() {
    return (
      <section className = 'journal'>
        <form
          className = 'journal-form'
          onSubmit = {this.handleSubmit}>
          <input
            className = 'journal-input'
            placeholder = 'title'
            name = 'title'
            value = {this.state.title}
            onChange = {this.handleChange}/>
          <input
            className = 'journal-input journal-input-body'
            placeholder = 'body'
            name = 'body'
            value = {this.state.body}
            onChange = {this.handleChange}/>
          <button
            className = 'submit-button'
            disabled = {!this.state.title || !this.state.body}>keep</button>
        </form>
        <article
          className = 'cards'>{this.renderCards()}</article>
      </section>
    );
  }
}
export const mapStateToProps = (store) => {
  return {
    cards: store.cards
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => dispatch(addCard(card)),
    deleteCard: (id) => dispatch(deleteCard(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Journal);
