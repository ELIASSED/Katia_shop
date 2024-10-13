// pages/index.tsx
import { GetServerSideProps } from 'next';
import Image from 'next/image';

interface HomeProps {
  images: {
    public_id: string;
    secure_url: string;
  }[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Importez et utilisez Cloudinary ici
  const { v2: cloudinary } = require('cloudinary');
  
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const results = await cloudinary.search
    .expression('folder:katia_shop/*')
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute();

  return {
    props: {
      images: results.resources,
    },
  };
};

export default function Home({ images }) {
  return (
    <div>
      {images.map((image) => (
        <Image
          key={image.public_id}
          src={image.secure_url}
          alt={image.public_id}
          width={300}
          height={200}
        />
      ))}
    </div>
  );
}