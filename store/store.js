import { createStore } from 'redux';
const store = createStore(reducer);

const reducer = function (state, action) {
  
  return new_state;
};
const state = store.getState();


function addKeys(keys) {
  return {
    type: 'keys',
    array:[String(keys)]
  }
}