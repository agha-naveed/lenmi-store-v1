import mongoose, { Document, Schema } from 'mongoose';

interface IBuyItems {
    productId: Schema.Types.ObjectId;
    quantity: number;
    deliveryAddress: object;
    paymentMethod: any;
}
  
interface IBuy extends Document {
    userId: Schema.Types.ObjectId;
    items: IBuyItems[];
}

const buyItemSchema = new Schema<IBuyItems>({
    productId: { type: Schema.Types.ObjectId, ref: 'Buy', required: true },
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
        }
    },
    paymentMethod: {
        type: String
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