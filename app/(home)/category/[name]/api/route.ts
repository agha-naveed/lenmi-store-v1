import dbConnection from "@/lib/database/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await dbConnection()

    return NextResponse.json({
        message: "ok"
    })
}