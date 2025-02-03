import { v2 as cloudinary } from 'cloudinary'
export async function POST(request:Request) {
    const body = (await request.json()) as {paramsToSign: Record<string, string>}
    const {paramsToSign} = body
    
    const signature = cloudinary.utils.api_sign_request(paramsToSign, "7tdMut14avuzqheKYNmWnE0N88I" as string)

    return Response.json({ signature })
}