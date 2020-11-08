import { BrowserWindow } from 'electron';
import { FROM_MAIN, TO_MAIN } from '../constants/channels';
import { Payload } from './types';
import { CustomWindow } from '../types/Window';

declare let window: CustomWindow;

export const sendToWindow = (mainWindow: BrowserWindow, payload: Payload): void => {
    mainWindow.webContents.send(FROM_MAIN, payload);
};

export const sendToMain = (payload: Payload): void => {
    window.api.send(TO_MAIN, payload);
};