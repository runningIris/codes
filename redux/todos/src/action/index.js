let idCounter = 0;
export const TOGGLE_TODO = (id) => ({type: 'TOGGLE_TODO', id});
export const ADD_TODO = (text) => ({type: 'ADD_TODO', text, id: ++idCounter, completed: false});
export const FILTERS = {
  SHOW_ALL: {
    type: 'SET_VISIBILITY',
    filter: 'SHOW_ALL'
  },
  SHOW_ACTIVE: {
    type: 'SET_VISIBILITY',
    filter: 'SHOW_ACTIVE'
  },
  SHOW_COMPLETED: {
    type: 'SET_VISIBILITY',
    filter: 'SHOW_COMPLETED'
  }
}
