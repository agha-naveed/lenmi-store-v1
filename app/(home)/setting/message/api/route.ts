import dbConnection from '@/lib/database/dbConnection'
import User from '@/lib/database/model/user'
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'
import Buy from '@/lib/database/model/buy';

export async function GET(req: NextRequest) {
    
    await dbConnection()
    
    const cookie = await cookies()
    
    
    if(cookie) {
        const isExist = await User.findOne({email: cookie.get("email")?.value})
        if(isExist.account_type == "business") {
            const b_acc = await Buy.aggregate([
                {
                  $unwind: "$items"
                },
                {
                  $match: {
                    "items.ownerId": isExist._id
                  }
                },
                {
                  $project: {
                    userId: 1,
                    _id: 1,
                    items: [ "$items" ]
                  }
                }
            ])

            return NextResponse.json({
                isExist,
                totalMessages : b_acc
            }, { status: 200 })
        }
        else {
            return NextResponse.json(isExist, { status: 200 })
        }
    }
    else {
        return NextResponse.json(null)
    }
}