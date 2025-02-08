import dbConnection from "@/lib/database/dbConnection";


export async function GET() {
    await dbConnection()
}