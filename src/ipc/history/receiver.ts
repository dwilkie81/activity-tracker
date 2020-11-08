import { loadHistory } from '../../store/history/actions';
import store from '../../store/store';
import { Payload, Receiver } from '../types';
import { LOAD_HISTORY_RESPONSE } from './actions';

const receiver: Receiver = (payload: Payload) => {
    if (payload.type === LOAD_HISTORY_RESPONSE) {
        store.dispatch(loadHistory(payload.data));
    }
};

export default receiver;