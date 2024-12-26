import dotenv from 'dotenv';

dotenv.config(); 

export const PORT = process.env.PORT || 3000; // define port variable

export const MONGO_URL = process.env.MONGO_URL; // define mongo url variable

export const AWS_REGION = process.env.AWS_REGION; // define aws region

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY; // define secret key

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID; // define access key

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME; // bucket s3 bucket name