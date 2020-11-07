import { Options } from 'sequelize/types';

interface Config {
    development: Options,
    test: Options,
    production: Options,
}

const config: Config = {
    development: {
        dialect: 'sqlite',
        storage: process.env.DATABASE_FILENAME,
    },
    test: {
        dialect: 'sqlite',
        storage: process.env.DATABASE_FILENAME,
    },
    production: {
        dialect: 'sqlite',
        storage: process.env.DATABASE_FILENAME,
    }
};

export default config;