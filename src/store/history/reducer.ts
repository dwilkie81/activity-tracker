import { AnyAction } from 'redux';
import { Activity } from '../../types/Activity';
import { LOAD_HISTORY_ACTION } from './actions';

export interface HistoryState {
    history: Activity[],
}

const defaultState = {
    history: [{id: 4, title: 'My Activity', duration: 100}],
};

const reducer = (state: HistoryState = defaultState, action: AnyAction): HistoryState => {
    switch (action.type) {
        case LOAD_HISTORY_ACTION:
            return {
                ...state,
                history: action.data,
            };
        default:
            return state;
    }
};

export default reducer;