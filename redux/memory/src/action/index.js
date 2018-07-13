let id = 1000;

export const ADD_NEW_CHANNEL = 'ADD_NEW_CHANNEL';
export const UPDATE_CHANNEL = 'UPDATE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const UPDATE_CHANNEL_LIST = 'UPDATE_CHANNEL_LIST';

const updateList = (channel, content) => {
  id++;
  return {
    type: UPDATE_CHANNEL_LIST,
    channel,
    data: [{
      id,
      content
    }]
  };
};

const updateChannel = (channel, data) => {
  if (typeof data === 'string') {
    data = [data];
  }
  return {
    type: UPDATE_CHANNEL,
    channel,
    data: data.map(content => {
      id++;
      return {
        id,
        content
      }
    })
  }
};

const addNewChannel = (channel, data) => {
  if (typeof data === 'string') {
    data = [data];
  }
  return {
    type: ADD_NEW_CHANNEL,
    channel,
    data: data.map(content => {
      id++;
      return {
        id,
        content
      }
    })
  }
};

export const actionCreator =  {
  updateList,
  updateChannel,
  addNewChannel
};
