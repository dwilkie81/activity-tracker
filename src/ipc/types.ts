import { BrowserWindow } from 'electron';
import { ActivityPayload } from './activity/actions';
import { HistoryPayload } from './history/actions';

export type Handler = (mainWindow: BrowserWindow, payload: Payload) => Promise<void>;
export type Receiver = (payload: Payload) => void;

export type Payload = HistoryPayload | ActivityPayload;