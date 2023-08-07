import mongoose from "mongoose";

let isConnected = false;  // track the connection state

export const connectToDB = async () => {
    mongoose.set('strictQuery', true); // setting mongoose options to remove/avoid any console errors

    if(isConnected){
        console.log('Connecting to mongodb');
    }
    return;

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_promt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;

        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error);
    }
}