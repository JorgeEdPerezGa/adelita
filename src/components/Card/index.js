
import React from 'react';
import './style.css';

const Card = ({index, title, body, date, id, deleteCard}) => {
  return (
    <div className = 'card'>
      <section className = 'card-section-left'>
        <p className = 'card-index'>{index + 1}</p>
        <div className = 'delete-image'>
          <button
            className = 'delete-button'
            onClick = {(event) => deleteCard(event, id)}></button>
        </div>
      </section>
      <section className = 'card-section-right'>
        <p
          className = 'title' >{title}</p>
        <div className = 'body-container'>
          <p className = 'body'>{body}</p>
        </div>
        <p className = 'date'>{date}</p>
      </section>
    </div>
  );
};

export default Card;
