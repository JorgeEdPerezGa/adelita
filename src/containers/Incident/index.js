import React, { Component } from 'react';
import './style.css';
import jsonData from "../../data/QA.json";

class Incident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      next: 1,
      prev: 0
    };
  }

  handleAnsClick = (options) => {
    console.log("print pass")
        console.log(options);
    this.setState({
      next: options.qLink
    });
    console.log(options);
  }

  handleNextClick = (options) => {
    console.log("print pass")
    console.log(options);
      if(this.state.next==911) {
        alert('calling 911..')
      }
      else {
        this.setState({
          current: this.state.next,
          prev: this.state.current
        });
        console.log(options);
      }
  }

  handlePrevClick = (options) => {
    console.log("print pass")
        console.log(options);
    this.setState({
      current: this.state.prev
    });
    console.log(options);
  }

    handleAnswerType(options) { 
      return(
        <div>
      {isNaN(options.ans) ? (
        <button 
          className="cards"
          onClick={() => this.handleAnsClick(options)} >
            <p>{options.ans}</p>
        </button>
        ) : (
        <input
          className="cards"
          onChange={() => this.handleAnsClick(options)} >
        </input>
        )}
        </div>
      )
    }

    genQA = () => {
      console.log(this.state);
    for(var i = 0; i < jsonData.length; i++) {
    var obj = jsonData[this.state.current];

    console.log("Name: " + obj.question + ", " + obj.answer);
    return(
      <div>
          <div className="container">
            <div className="question">
              <p>{obj.question}</p>
            </div>
            <div className="cardHolder">
            {obj.answer.map((options) => this.handleAnswerType(options))}
            </div>
          </div>
      </div>)
    }
  }


  render() {
    return (
      <div className="containerHolder">
        <p>Incident</p>
        {this.genQA()}
          <div className="navContainer">
            <div>
              <button onClick={() => this.handlePrevClick()}>Previous</button>
            </div>
            <div>
              <button onClick={() => this.handleNextClick()}>Next</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Incident;
