import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
    userId: Schema.Types.ObjectId;
    name: string;
    price: number;
    discounted_price: number;
    description?: string;
    category: string;
    rating: number;
    color: [string];
    sold: number;
    imgURL : string;
    stock: number;
    pay_method: [string];
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
    category: {
        type: String,
        required: true
    },
    discounted_price: {
        type: Number
    },
    rating: {
        type: Number
    },
    color: {
        type: [String]
    },
    sold: {
        type: Number
    },
    imgURL: [{
        type: String
    }],
    stock: {
        type: Number
    },
    pay_method: {
        type: [String]
    }
})

productSchema.index({ name: 'text' });

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

Product.createIndexes()
  .then(() => {
    console.log('Text index created successfully!');
  })
  .catch(err => {
    console.error('Error creating text index:', err);
  });


export default Product;