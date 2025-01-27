import dbConnection from '@/lib/database/dbConnection'
import User from '@/lib/database/model/user'
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
    const {first_name, last_name, phone_number, email, password, account_type} : {
        first_name: string;
        last_name: string
        phone_number: number;
        email: string
        password: string;
        account_type: string;
    } = await request.json()

    await dbConnection();

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.insertMany([
            {
                first_name,
                last_name,
                phone_number,
                email,
                password: hashedPassword,
                account_type,
            }
        ]);

        return NextResponse.json(newUser, { status: 201 });
    }
    catch (error) {
        console.error(error);
        return NextResponse.json({
            error: "Duplicate Email is not Allowed!"
        }, { status: 405 });
    }
}