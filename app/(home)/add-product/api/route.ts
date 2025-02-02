// import upload from './upload'
import multer from 'multer'
import { NextRequest, NextResponse } from 'next/server'
import Product from '@/lib/database/model/product'
import dbConnection from '@/lib/database/dbConnection'



export async function POST(request:NextRequest) {



    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/temp')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
    
    const upload = multer({ storage })


    await dbConnection()
    
    upload.array("imgURL", 3)

    await Product.insertMany([
        {
            // profile_pic: 
        }
    ])
    

    console.log("request"+await request.json())



    return NextResponse.json({message: "Done"})
}