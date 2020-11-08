import { NewActivity } from '../../types/Activity';

export const ADD_NEW_ACTION_REQUEST = 'IPC/ADD_NEW_ACTION_REQUEST';

export interface AddNewActionRequestPayload {
    type: typeof ADD_NEW_ACTION_REQUEST;
    activity: NewActivity;
}

export type ActivityPayload = AddNewActionRequestPayload;

export const addNewActivityRequestAction = (activity: NewActivity): AddNewActionRequestPayload => ({
    type: ADD_NEW_ACTION_REQUEST,
    activity,
});