import dbConnection from '@/lib/dbConnection'
import User from '@/lib/model/user'
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
    
    await dbConnection()
    const {email, password} : {email: string, password: string} = await req.json()


    // let isExist = await User.aggregate([{
    //     $match: {email}
    //     },
    //     {$limit: 1}
    // ])

    let isExist = await User.findOne({email})

    const cookie = await cookies()

    try {
        if(isExist) {
            let result = await bcrypt.compare(password, isExist.password)

            if(result) {
                cookie.set("email", email, {secure: true, httpOnly: true})
                return NextResponse.json(isExist)
            }
            else {
                return NextResponse.json({error: "error"}, { status: 401 })
            }
            
        }
        else return NextResponse.json({error: "error"}, { status: 404 })
    } catch(e) {
        return NextResponse.json({ error: "Server error" }, { status: 500 })
    }
}