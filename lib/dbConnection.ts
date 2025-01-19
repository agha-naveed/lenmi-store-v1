import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {

    if(connection.isConnected) {
        console.log("Already Connected to DB")
        return
    }

    try {
        let db = await mongoose.connect(process.env.MONGODB_URI || "")

        connection.isConnected = db.connections[0].readyState

        console.log("Successfully connected to MongoDB")

    } catch(err) {
        console.log("Database connection failed! :(")
        process.exit(1)
    }

}

export default dbConnect;