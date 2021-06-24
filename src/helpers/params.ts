import dotenv from 'dotenv';
dotenv.config();

export const PORT = parseInt(process.env.PORT || '4242', 10);
export const HOST = process.env.HOST || '0.0.0.0';
export const FRONT_PORT = process.env.FRONT_PORT || '3000';
export default {
    PORT,
    HOST,
    FRONT_PORT,
};
