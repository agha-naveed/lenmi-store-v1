import mongoose, { Document, Schema } from 'mongoose';

interface ICartItem {
    productId: Schema.Types.ObjectId;
    quantity: number;
}
  
interface ICart extends Document {
    userId: string;
    items: ICartItem[];
}
  
const cartItemSchema = new Schema<ICartItem>({
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
});
  
const cartSchema = new Schema<ICart>({
    userId: { type: String, required: true },
    items: [cartItemSchema],
});
  
const Cart = mongoose.models.Cart || mongoose.model<ICart>('Cart', cartSchema);
  
export default Cart;