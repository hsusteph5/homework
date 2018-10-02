import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

//adding logging to dispatch
const addLoggingToDispatch = store => next => action => {
    console.log('before dispatch', store.getState());
     console.log('Action:', action);
     next(action);
     console.log('after dispatch', store.getState());
  // let dispatch = store.dispatch;
  // return (action) => {
  //   console.log('before dispatch', store.getState());
  //   console.log('Action:', action);
  //   dispatch(action);
  //   console.log('after dispatch', store.getState());
  // }
};


const addLoggingToNext = store => next => action => {
  console.log(next);
  next(action);
};

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch, addLoggingToNext));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
