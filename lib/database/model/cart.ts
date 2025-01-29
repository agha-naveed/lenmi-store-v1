import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    user: string;
    last_name: string;
    phone_number: number;
    email: string;
    password: string;
    account_type: 'personal' | 'business';
    profile_pic: Buffer
}