const videos = (store = [], action) => {
  switch (action.type) {
  case 'ADD_VIDEOS':
    return [...store, ...action.videos];
  default:
    return store;
  }
};

export default videos;
