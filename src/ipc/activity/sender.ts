import { NewActivity } from '../../types/Activity';
import { sendToMain } from '../ipc';
import { addNewActivityRequestAction } from './actions';

export const addNewActivity = (activity: NewActivity): void => {
    sendToMain(addNewActivityRequestAction(activity));
};