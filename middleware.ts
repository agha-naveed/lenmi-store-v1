import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import dbConnection from './lib/database/dbConnection'
import { cookies } from 'next/headers'
import User from './lib/database/model/user'
 
export async function middleware(request: NextRequest) {
    await dbConnection()
    
    const cookie = await cookies()
    
    
    if(cookie) {
        const isExist = await User.findOne({email: cookie.get("email")?.value})
        // return NextResponse.json(isExist, { status: 200 })
        return NextResponse.next()
    }
    else {
        return NextResponse.json(null)
    }
    // return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/add-product', '/buy/item/[id]', '/cart'],
}