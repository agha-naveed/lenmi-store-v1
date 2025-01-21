import dbConnection from '@/lib/dbConnection'
import User from '@/lib/model/user'
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
    
    await dbConnection()
    const {email, password} : {email: string, password: string} = await req.json()


    let isExist = await User.aggregate([{
        $match: {email}
        },
        {$limit: 1}
    ])


    const cookie = await cookies()
    
    console.log(isExist)

    if(isExist) {
        bcrypt.compare(password, isExist[0].password, (err, result) => {
            if(result) {
                cookie.set("email", email, {secure: true, httpOnly: true})
                return NextResponse.json(isExist)
            }
            else {
                return NextResponse.json({error: "error"})
            }
        })
    }
    else return NextResponse.json({error: "error"})
}