import mongoose, { Document, Schema } from 'mongoose';

interface IBuyItems {
    productId: Schema.Types.ObjectId;
    quantity: number;
    deliveryAddress: object;
    paymentMethod: any;
    paymentDetails: any;
    ownerId: Schema.Types.ObjectId;
    status: string;
}
  
interface IBuy extends Document {
    userId: Schema.Types.ObjectId;
    items: IBuyItems[];
}

const buyItemSchema = new Schema<IBuyItems>({
    productId: { type: Schema.Types.ObjectId, ref: 'Buy', required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    quantity: { type: Number, required: true },
    deliveryAddress: {
        recipientName: {
            type: String
        },
        phone_number: {
            type: Number
        },
        district: {
            type: String
        },
        address: {
            type: String
        },
    },
    paymentMethod: {
        type: String,
        enum: ['cod', 'card', 'easypaisa', 'jazzcash'],
    },
    paymentDetails: {
        bankName: { type: String },
        cardNumber: { type: String },
        cvv: { type: String },
        expiryDate: { type: String }
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancel'],
        default: "pending"
    }
}, { _id: false });
  
const buySchema = new Schema<IBuy>({
    userId: { 
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    items: [buyItemSchema],
});
  
const Buy = mongoose.models.Buy || mongoose.model<IBuy>('Buy', buySchema);
  
export default Buy;