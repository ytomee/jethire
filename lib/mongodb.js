import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            return;
        }

        await mongoose.connect(process.env.MONGODB_URL);

    } catch (error) {
        console.log("Erro a conectar: ", error);
    }
};

export default connectMongoDB;