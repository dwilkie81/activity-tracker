import { combineReducers, createStore } from 'redux';
import historyReducer from './history/reducer';

const rootReducer = combineReducers({
    history: historyReducer,
});

export type State = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;