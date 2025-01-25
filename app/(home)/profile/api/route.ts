import dbConnection from '@/lib/dbConnection'
import User from '@/lib/model/user'
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
    
    await dbConnection()
    const {first_name, last_name, phone_number, email, password, profile_pic} : {
        first_name: string,
        last_name: string,
        phone_number: number
        email: string,
        password: string
        profile_pic: File
    } = await req.json()


    await User.updateOne({email}, {
        $set: {
            first_name,
            last_name,
            phone_number,
            profile_pic
        }
    })


    
    // const cookie = await cookies()

    // try {
    //     if(isExist) {
    //         let result = await bcrypt.compare(password, isExist.password)

    //         if(result) {
    //             cookie.set("email", email, {secure: true, httpOnly: true})
    //             return NextResponse.json(isExist)
    //         }
    //         else {
    //             return NextResponse.json({error: "error"}, { status: 401 })
    //         }
    //     }
    //     else return NextResponse.json({error: "error"}, { status: 404 })
    // } catch(e) {
    
        return NextResponse.json({ message: "ok" })
    // }
}


export async function GET(req: NextRequest) {
    
    await dbConnection()
    
    const cookie = await cookies()
    
    if(cookie) {
        let datafromCookie_DB = await User.findOne({email: cookie.get("email")?.value})
        return NextResponse.json(datafromCookie_DB)
    }
    else {
        return NextResponse.json({message: "error"})
    }
}



// export async function PATCH(req: NextRequest) {
    
//     const cookie = await cookies()
//     cookie.delete("email")

//     return Response.json({message: "done"})
// }