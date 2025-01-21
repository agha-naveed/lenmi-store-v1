import dbConnection from '@/lib/dbConnection'
import User from '@/lib/model/user'
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


    bcrypt.genSalt(10, async function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            await User.insertMany([
                {
                    first_name, last_name, phone_number, email, password: hash, account_type
                }
            ])
            .then((res) => NextResponse.json(res))
            .catch(() => {
                return NextResponse.json({
                    error: "Duplicate Email is not Allowed!"
                })
            })
        });
    });

    
}