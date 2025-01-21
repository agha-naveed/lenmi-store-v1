import dbConnection from "@/lib/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    
    let a = await dbConnection()
    return NextResponse.json({msg: "done"})
}