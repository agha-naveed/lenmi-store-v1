import dbConnection from "@/lib/database/dbConnection";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Cart from "@/lib/database/model/cart";
import jwt from 'jsonwebtoken'


export async function GET() {
    await dbConnection()
    
    
}