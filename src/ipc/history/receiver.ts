import { Payload, Receiver } from '../types';
import { LOAD_HISTORY_RESPONSE } from './actions';

const receiver: Receiver = (payload: Payload) => {
    if (payload.type === LOAD_HISTORY_RESPONSE) {
        const data = payload.data;
        data.forEach((contact) => {
            const [ name, email ] = contact.split(',');
            // TODO: Do something with the response here - dispatch redux action
            console.log(name, email);
        });
    }
};

export default receiver;