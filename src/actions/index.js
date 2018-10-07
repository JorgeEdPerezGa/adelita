export const addCard = (card) => {
  return {
    type: 'ADD_CARD',
    card
  };
};

export const deleteCard = (id) => {
  return {
    type: 'DELETE_CARD',
    id
  };
};
