import { sendToMain } from '../ipc';
import { loadHistoryRequestAction } from './actions';

export const fetchHistory = (): void => {
    sendToMain(loadHistoryRequestAction());
};