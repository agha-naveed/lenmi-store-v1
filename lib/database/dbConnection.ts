import mongoose, { ConnectOptions } from 'mongoose';

const URI = "mongodb+srv://naveedabs31:Yaali110@cluster0.oqtmw.mongodb.net/lenmi-store?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set('bufferCommands', false);
let isConnected = false;

export default async function dbConnection(): Promise<void> {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    
    isConnected = true;
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error connecting to MongoDB:', error.message);
    } else {
      console.error('An unknown error occurred while connecting to MongoDB');
    }
  }
}