import { Activity } from '../../types/Activity';
import { State } from '../store';
import { HistoryState } from './reducer';

const getHistoryState = (state: State): HistoryState => state.history;

export const getHistory = (state: State): Activity[] => getHistoryState(state).history;