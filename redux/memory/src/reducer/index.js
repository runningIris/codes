import {combineReducers} from 'redux';
import {
  ADD_NEW_CHANNEL,
  UPDATE_CHANNEL,
  REMOVE_CHANNEL,
  UPDATE_CHANNEL_LIST
} from '../action';

const defaultNews = [
  {
    channel: 'Breaking News',
    list: [
      {
        id: 1,
        content: 'Two Ghosts Haunt Me at Night.'
      },
      {
        id: 2,
        content: 'No One Can Save Me.'
      }
    ]
  },
  {
    channel: 'Favorites',
    list: [
      {
        id: 220,
        content: 'Les Miserables'
      },
      {
        id: 221,
        content: 'Reality'
      },
      {
        id: 222,
        content: 'YOU'
      }
    ]
  }
];

const news = (state=defaultNews, action) => {
  const {type, data, channel} = action;
  switch(type) {
    case ADD_NEW_CHANNEL:
      state.forEach(obj => {
        if (obj.channel === channel) {
          throw new Error(`Channel ${channel} 已存在... 不能作为新的channel被添加`);
        }
      })
      return [...state, {channel, list: data}];
    case UPDATE_CHANNEL:
      return state.map(obj => {
        if (obj.channel === channel) {
          return {channel, list: data};
        }
        return obj;
      });
    case UPDATE_CHANNEL_LIST:
      return state.map(obj => {
        if (obj.channel === channel) {
          return {channel, list: [...obj.list, ...data]};
        }
        return obj;
      });
    case REMOVE_CHANNEL:
      return state.filter(obj => obj.channel !== channel);
    default:
      return state;
  }
}

export default combineReducers({news});
