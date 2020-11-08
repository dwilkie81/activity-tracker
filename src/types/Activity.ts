export interface Activity {
    id: number;
    title: string;
    duration: number;
}

export type NewActivity = Omit<Activity, 'id'>;