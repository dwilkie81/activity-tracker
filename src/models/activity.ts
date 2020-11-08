import { Model, DataTypes } from 'sequelize';
import db from '../db';

class Activity extends Model {
    public id?: number;
    public title?: string;
    public duration?: number;
}
  
Activity.init({
    title: DataTypes.STRING,
    duration: DataTypes.NUMBER
}, {
    sequelize: db,
    modelName: 'Activity',
});

export default Activity;