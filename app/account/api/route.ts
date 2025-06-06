import dbConnection from '@/lib/database/dbConnection'
import User from '@/lib/database/model/user'
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'

export async function POST(req: NextRequest) {
    
    await dbConnection()
    const {email, password} : {email: string, password: string} = await req.json()

    const isExist = await User.findOne({email})

    const cookie = await cookies()

    try {
        if(isExist) {
            const result = await bcrypt.compare(password, isExist.password)

            if(result) {
                const token = jwt.sign({obj_id: isExist._id}, process.env.JWT_CODE)
                cookie.set("u_obj_i", token, {secure: true, httpOnly: true})
                cookie.set("email", email, {secure: true, httpOnly: true})

                return NextResponse.json(isExist, { status: 200 })
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


export async function GET() {
    await dbConnection()
    const cookie = await cookies()
    if(cookie) {
        const isExist = await User.findOne({email: cookie.get("email")?.value})
        return NextResponse.json(isExist, { status: 200 })
    }
    else {
        return NextResponse.json(null)
    }
}



export async function PATCH(req: NextRequest) {
    const cookie = await cookies()
    cookie.delete("u_obj_i")
    cookie.delete("email")

    return Response.json({message: "done"})
}