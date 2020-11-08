import { Sequelize } from 'sequelize';
import config from './sequelize.config';

const getEnv = (): keyof typeof config => {
    switch(process.env.NODE_ENV) {
        case 'production': return 'production';
        case 'test': return 'test';
        default: return 'development';
    }
};

const env  = getEnv();

export default new Sequelize(config[env]);
