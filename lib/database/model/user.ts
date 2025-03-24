import mongoose, { Document, Schema } from 'mongoose';

interface IAddress extends Document {
    full_address: string;
    district: string;
}
interface IUser extends Document {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    password: string;
    account_type: 'personal' | 'business';
    profile_pic: string;
    address: IAddress;
}

const addressSchema: Schema<IAddress> = new mongoose.Schema({
    district: {
        type: String
    },
    full_address: {
        type: String
    }
})
const userSchema: Schema<IUser> = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    address: addressSchema,
    account_type: {
        type: String,
        enum: ['personal', 'business'],
        default: 'personal'
    },
    profile_pic: {
        type: String
    }
}, { timestamps: true });


const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;