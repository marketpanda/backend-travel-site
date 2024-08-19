import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
 
cloudinary.config({ 
    cloud_name: "test",
    api_key: "test2",
    api_secret: "test3"
})
// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET
// })
 
export default cloudinary