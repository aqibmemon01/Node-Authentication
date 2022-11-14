import mongoose from 'mongoose';
import { db_config } from './mongoDB';

export const InitializeDatabase = () => {
    mongoose.connect(db_config.mongourl).then((data) => {
        console.log('MongoDB Connected...')
    }).catch((err: String) => console.log(err));
}