import { FROM_MAIN } from '../constants/channels';
import { CustomWindow } from '../types/Window';
import historyReceiver from './history/receiver';
import { Payload } from './types';

declare let window: CustomWindow;

export const configureReceivers = (): void => {
    window.api.receive(FROM_MAIN, (payload: Payload) => {
        historyReceiver(payload);
    });
};