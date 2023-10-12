import mongoose from "mongoose";


async function connectDataBase(){
    mongoose.connect("mongodb+srv://myllenaeisMsgl0210@cluster0.nm8f8fw.mongodb.net/felicidade?retryWrites=true&w=majority&appName=AtlasApp");

    return mongoose.connection;
}

export default connectDataBase;

