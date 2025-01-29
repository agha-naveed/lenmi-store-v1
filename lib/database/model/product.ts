import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
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

const productSchema = new Schema<IProduct>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },

})