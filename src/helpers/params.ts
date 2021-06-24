import dotenv from 'dotenv';
dotenv.config();

export const APP_ENV = process.env.APP_ENV;
export const AWS_ASSETS_FOLDER = APP_ENV || 'dev';
export const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_ASSETS_BUCKET, AWS_REGION } =
    process.env;
export const PORT = parseInt(process.env.PORT || '4242', 10);
export const HOST = process.env.HOST || '0.0.0.0';
export const DATABASE_URI = process.env.DATABASE_URI;
export default {
    APP_ENV,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_ASSETS_FOLDER,
    AWS_ASSETS_BUCKET,
    AWS_REGION,
    PORT,
    HOST,
    DATABASE_URI,
};
