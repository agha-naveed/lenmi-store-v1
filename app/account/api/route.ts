import dbConnection from '@/lib/dbConnection'
import User from '@/lib/model/user'
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt'

export async function POST(req: NextRequest) {
    const {email, password} : {email: string, password: string} = await req.json()

    let isExist = await User.findOne({email})   
    if(isExist) {
        
    }
}