import mongoose, { Document, Schema } from 'mongoose';

interface IReview extends Document {
    userId: Schema.Types.ObjectId;
    productId: Schema.Types.ObjectId;
    rating: string;
    comment: string;
    images: string;
}

const productReview = new Schema<IReview>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    rating: {
        type: String
    },
    comment: {
        type: String
    },
    images: [{
        type: String
    }]
})


const ProductReview = mongoose.models.Product_Review || mongoose.model<IReview>('Product_Review', productReview);


export default ProductReview;