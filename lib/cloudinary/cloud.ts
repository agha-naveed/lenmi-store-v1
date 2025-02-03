import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET_CODE
});

export async function uploadOnCloudinary(localFilePath:string) {

    try {
        // Upload an image
        const uploadResult = await cloudinary.uploader
        .upload(
            localFilePath, {
                resource_type: "auto",
            }
        )

        console.log("file is uploaded: " + uploadResult.url)
        return uploadResult
    }
    catch(e) {
        fs.unlinkSync(localFilePath)
        return null
    }

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });

    console.log(optimizeUrl);
}