import { BrowserWindow } from 'electron';
import { fetchHistory } from '../../service/historyService';
import { sendToWindow } from '../ipc';
import { Handler, Payload } from '../types';
import { loadHistoryResponseAction, LOAD_HISTORY_REQUEST } from './actions';

const handler: Handler = async (mainWindow: BrowserWindow, payload: Payload) => {
    switch(payload.type) {
        case LOAD_HISTORY_REQUEST: {
            const activities = await fetchHistory();
            sendToWindow(mainWindow, loadHistoryResponseAction(activities));
            return;
        }
    }
};

export default handler;