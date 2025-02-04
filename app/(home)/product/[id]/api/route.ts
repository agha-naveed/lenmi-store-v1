// import 

import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    let p_id = await params

    return NextResponse.json({ms:"as"})
}