import { BrowserWindow, ipcMain } from 'electron';
import Activity from '../models/activity';
import { TO_MAIN } from '../constants/channels';
import historyHandler from './history/handler';
import db from '../db';

export const configureHandlers = (mainWindow: BrowserWindow): void => {
    ipcMain.on(TO_MAIN, async (event, payload) => {
        await historyHandler(mainWindow, payload);

        if (payload.type === 'saveData') {
            await db.sync();
            await Activity.create({
                title: payload.name,
                duration: 5,
            });        
        }
    });
};