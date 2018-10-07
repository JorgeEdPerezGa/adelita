const currentVideo = (store = {}, action) => {
  switch (action.type) {
  case 'SELECTED_VIDEO':
    return {...action.video};
  default:
    return store;
  }
};

export default currentVideo;
