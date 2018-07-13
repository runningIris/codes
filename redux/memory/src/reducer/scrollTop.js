import {STORE_NEWS, CLEAR_NEWS} from '../action';

const storeScrollTop = (height) => {
  localStorage.setItem('scrollTop', height);
};

const getScrollTop = () => {
  return localStorage.getItem('scrollTop');
}

const scrollTop = (state = getScrollTop(), action) => {
  const {type} = action;
  switch (type) {
    case STORE_NEWS:
      const height = document.documentElement.scrollTop || document.body.scrollTop;
      storeScrollTop(height);
      return state;
    case CLEAR_NEWS:
      storeScrollTop(0);
      return 0;
    default:
      return state;
  }
}

export default scrollTop;
