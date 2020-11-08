import { BrowserWindow } from 'electron';
import { fetchHistory } from '../../service/historyService';
import db from '../../db';
import Activity from '../../models/activity';
import { sendToWindow } from '../ipc';
import { Handler, Payload } from '../types';
import { ADD_NEW_ACTION_REQUEST } from './actions';
import { loadHistoryResponseAction } from '../history/actions';

const handler: Handler = async (mainWindow: BrowserWindow, payload: Payload) => {
    switch(payload.type) {
        case ADD_NEW_ACTION_REQUEST: {
            await db.sync();
            await Activity.create({
                ...payload.activity,
            });    
            
            const activities = await fetchHistory();
            sendToWindow(mainWindow, loadHistoryResponseAction(activities));
            
            return;
        }
    }
};

export default handler;