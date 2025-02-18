import dbConnection from "@/lib/database/dbConnection";
import { NextRequest } from "next/server";

export async function GET(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await dbConnection()
}