import { BrowserWindow } from 'electron';
import Activity from '../../models/activity';
import { sendToWindow } from '../ipc';
import { Handler, Payload } from '../types';
import { loadHistoryResponseAction, LOAD_HISTORY_REQUEST } from './actions';

const handler: Handler = async (mainWindow: BrowserWindow, payload: Payload) => {
    switch(payload.type) {
    case LOAD_HISTORY_REQUEST: {
        const data = await Activity.findAll();
        const titles = data.map(d => `${d.title},email`);

        sendToWindow(mainWindow, loadHistoryResponseAction(titles));
        return;
    }
    }
};

export default handler;