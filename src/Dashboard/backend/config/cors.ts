import { CorsOptions, CorsOptionsDelegate } from 'cors';
import { config } from 'dotenv';

config();

const { FRONTEND_URL, FRONTEND_PORT } = process.env;

export default {
    origin: `${FRONTEND_URL}:${FRONTEND_PORT}` || 'localhost:3000',
    credential: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
}
