import { createStore } from 'redux';
import historyReducer from './history/reducer';

const store = createStore(historyReducer);

export default store;