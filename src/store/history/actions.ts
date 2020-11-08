import { Activity } from '../../types/Activity';

export const LOAD_HISTORY_ACTION = 'REDUX/LOAD_HISTORY_ACTION';

export interface LoadHistoryAction {
    type: typeof LOAD_HISTORY_ACTION;
    data: Activity[];
}

export const loadHistory = (data: Activity[]): LoadHistoryAction => ({
    type: LOAD_HISTORY_ACTION,
    data,
});