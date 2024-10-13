import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default async function handler(req, res) {
  const results = await cloudinary.search
    .expression('folder:katia_shop/*')
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute()

  res.status(200).json(results)
}