import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    userId: Schema.Types.ObjectId;
    name: string;
    price: number;
    description?: string;
    category: string;
    rating: number;
    color: string;
    sold: number;
    imgURL : string[];
    stock: number;
}

