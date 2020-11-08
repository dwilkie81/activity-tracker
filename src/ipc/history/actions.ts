export const LOAD_HISTORY_REQUEST = 'IPC/LOAD_HISTORY_REQUEST';
export const LOAD_HISTORY_RESPONSE = 'IPC/LOAD_HISTORY_RESPONSE';

export interface LoadHistoryRequestPayload {
    type: typeof LOAD_HISTORY_REQUEST;
}

export interface LoadHistoryResponsePayload {
    type: typeof LOAD_HISTORY_RESPONSE;
    data: string[];
}

export type HistoryPayload = LoadHistoryRequestPayload | LoadHistoryResponsePayload;

export const loadHistoryRequestAction = (): LoadHistoryRequestPayload => ({
    type: LOAD_HISTORY_REQUEST,
});

export const loadHistoryResponseAction = (data: string[]): LoadHistoryResponsePayload => ({
    type: LOAD_HISTORY_RESPONSE,
    data,
});