import dbConnection from '@/lib/database/dbConnection'
import User from '@/lib/database/model/user'
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers';


export async function POST(req: NextRequest) {
    
    await dbConnection()
    const {first_name, last_name, phone_number, email, password} : {
        first_name: string,
        last_name: string,
        phone_number: number
        email: string,
        password: string
        // profile_pic: File
    } = await req.json()



    const cookie = await cookies()    
    const userData = await User.findOne({email});
    const result = await bcrypt.compare(password, userData.password)
    
    if(!result) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);        

        await User.updateOne({email}, {
            $set: {
                first_name,
                last_name,
                phone_number,
                // profile_pic,
                password: hashedPassword
            }
        })
        
        cookie.delete("email")

        return NextResponse.json({message: "ok", password: "true"})
    }

    else {
        await User.updateOne({email}, {
            $set: {
                first_name,
                last_name,
                phone_number,
            }
        })
        return NextResponse.json({message: "ok", password: "false"})
    }
}


export async function GET(req: NextRequest) {
    
    await dbConnection()
    
    const cookie = await cookies()
    
    if(cookie) {
        const datafromCookie_DB = await User.findOne({email: cookie.get("email")?.value})
        return NextResponse.json(datafromCookie_DB)
    }
    else {
        return NextResponse.json({message: "error"})
    }
}



export async function PATCH(req: NextRequest) {

    const image = await req.json()
    
    const cookie = await cookies()
    if(image.message == 'upload') {
        await User.findOneAndUpdate({email: cookie.get("email")?.value}, {
            $set: {
                profile_pic: image.imageURL
            }
        })
    }
    else {
        await User.findOneAndUpdate({email: cookie.get("email")?.value}, {
            $set: {
                profile_pic: null
            }
        })
    }
    return Response.json({message: "done"})


}