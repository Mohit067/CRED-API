import mongoose from 'mongoose';

import { MONGO_URL } from './serverConfig.js';

export default async function connectDB() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connect to mongoDB");
    } catch (error) {
        console.log("failed to connect mongoDB");
        console.log(error);
    }
}