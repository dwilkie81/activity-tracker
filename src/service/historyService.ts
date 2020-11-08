import ActivityModel from '../models/activity';
import { Activity as ActivityObject} from '../types/Activity';

export const fetchHistory = async (): Promise<ActivityObject[]> => {
    const data = await ActivityModel.findAll();
    const activities = data.map(d => ({
        id: d.id ?? 0,
        title: d.title ?? '',
        duration: d.duration ?? 0,
    }));

    return activities;
};