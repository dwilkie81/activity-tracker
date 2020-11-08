import { AnyAction } from 'redux';

interface HistoryState {
    value: number,
}

const reducer = (state: HistoryState = { value: 0 }, action: AnyAction): HistoryState => {
    switch (action.type) {
    case 'counter/incremented':
        return { value: state.value + 1 };
    case 'counter/decremented':
        return { value: state.value - 1 };
    default:
        return state;
    }
};

export default reducer;