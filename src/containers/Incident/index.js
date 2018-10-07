import React, { Component } from 'react';
import './style.css';

class Incident extends Component {
  render() {
    return (
      <div className="containerHolder">
        <p>Incident</p>
      <div className="container">
        <div className="question">
          <p>question ??</p>
        </div>
        <div className="cardHolder">
          <div className="cards">
            <p>Option 1</p>
          </div>
          <div className="cards">
            <p>Option 2</p>
          </div>
          <div className="cards">
            <p>Option 3</p>
          </div>
        </div>
      </div>
      <div class="navContainer">
        <div>
          <p>Previous</p>
        </div>
        <div>
          <p>Next</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Incident;
