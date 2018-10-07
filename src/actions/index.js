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

export const addVideos = (videos) => {
  return {
    type: 'ADD_VIDEOS',
    videos
  };
};

export const selectedVideo = (video) => {
  return {
    type: 'SELECTED_VIDEO',
    video
  };
};
