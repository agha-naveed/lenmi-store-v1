import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    first_name: string;
    last_name: string;
    phone_number: number;
    email: string;
    password: string;
    account_type: 'personal' | 'business';
    profile_pic: Buffer
}

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
        type: Number,
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
    account_type: {
        type: String,
        enum: ['personal', 'business'],
        default: 'personal'
    },
    profile_pic: {
        type: Buffer
    }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;