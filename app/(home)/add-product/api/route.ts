import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  
  try {
    await dbConnection()
  
    const formData = await req.formData();

    const imageURL = formData.getAll("imgFile") as string[]
    
    const name = formData.get("name") as string
    const price = formData.get("price") as string
    const description = formData.get("description") as string
    const category = formData.get("category") as string
    const color = JSON.parse(formData.get("color") as string)
    const stock = formData.get("stock") as string
    const paymentMethod = formData.get("payment_method") as string


    if (!imageURL) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }



    // Get User Object
  
    const cookie = await cookies()

    const objId = cookie.get("u_obj_i")?.value

    const decodedData = jwt.verify(objId || "", process.env.JWT_CODE ?? "") as { obj_id: string };

    await Product.insertMany([
      {
        userId: decodedData?.obj_id,
        name,
        price,
        description,
        category,
        color,
        stock,
        imgURL: imageURL,
        pay_method: paymentMethod
      }
    ])

    return NextResponse.json({
      message: "ok",
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
