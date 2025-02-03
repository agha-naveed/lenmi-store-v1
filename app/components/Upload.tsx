'use client'

import React, { ChangeEvent, useState } from 'react'
import { Image } from 'cloudinary-react'

export default function Upload() {
  const [image, setImage] = useState("")

  const imageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files
    const data = new FormData()
    if(!file || file.length === 0) {
        console.log("No FIle Select")
        return
    }

    data.append("file", file[0])
    data.append("upload_preset", "my-images")

    console.log(file)

    // Make the request to Cloudinary
    const res = await fetch(`https://api.cloudinary.com/v1_1/dpc7k1bpc/image/upload`, {
      method: "POST",
      body: data
    })

    // Get the response and extract the secure_url
    const myFile = await res.json()
    setImage(myFile.secure_url)  // Correct access to secure_url

  }

  return (
    <div>
      <form>
        photo
        <input type="file" name='file' onChange={imageUpload} />
        <br />

        {
          image ? 
            <Image cloudName={"dpc7k1bpc"} publicId={image} /> 
          : null
        }

        <button type='submit' className='bg-slate-800 text-white px-3 py-2'>Click Me!</button>
      </form>
    </div>
  )
}
