const card = (store = [], action) => {
  switch (action.type) {
  case 'ADD_CARD':
    return [...store, action.card];
  case 'DELETE_CARD':
    return store.filter(card => card.id !== action.id);
  default:
    return store;
  }
};

export default card;
