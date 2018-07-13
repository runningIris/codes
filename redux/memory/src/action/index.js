let id = 0;

export const ADD_NEW_CHANNEL = 'ADD_NEW_CHANNEL';
export const UPDATE_CHANNEL = 'UPDATE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const UPDATE_CHANNEL_LIST = 'UPDATE_CHANNEL_LIST';
export const STORE_NEWS = 'STORE_NEWS';
export const CLEAR_NEWS = 'CLEAR_NEWS';

const updateList = (channel, content) => {
  id++;
  console.log('dispatching updateChannel');
  const action = {
    type: UPDATE_CHANNEL_LIST,
    channel,
    data: [{
      id,
      content
    }]
  };
  console.log({action});
  return action;
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
  };
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
  };
};

export const actionCreator =  {
  updateList,
  updateChannel,
  addNewChannel
};
