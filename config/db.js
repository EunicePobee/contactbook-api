import mongoose from "mongoose";
import 'dotenv/config'

const connectionString = process.env.Mongo_Url


export const dbConnection = ()=> {
    mongoose.connect(connectionString).then(() => {
        console.log('Database is connected');
    })
}