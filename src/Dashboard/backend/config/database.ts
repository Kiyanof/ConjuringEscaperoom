import { config } from 'dotenv';

config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_LOCAL_PORT, DB_LOCAL_HOST } = process.env;

export default {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
};
