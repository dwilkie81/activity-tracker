import { BrowserWindow, ipcMain } from 'electron';
import { TO_MAIN } from '../constants/channels';
import historyHandler from './history/handler';
import activityHandler from './activity/handler';

export const configureHandlers = (mainWindow: BrowserWindow): void => {
    ipcMain.on(TO_MAIN, async (event, payload) => {
        await historyHandler(mainWindow, payload);
        await activityHandler(mainWindow, payload);
    });
};