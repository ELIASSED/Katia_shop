import { useState } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

interface HomeProps {
  images: {
    public_id: string;
    secure_url: string;
  }[];
}

export const getServerSideProps: GetServerSideProps = async () => {
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

export default function Home({ images }: HomeProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="relative">
      {/* Mosaïque d'images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div key={image.public_id} className="cursor-pointer" onClick={() => setSelectedIndex(index)}>
            <Image
              src={image.secure_url}
              alt={image.public_id}
              width={300}
              height={200}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Affichage en mode plein écran */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          {/* Flèche gauche pour l'image précédente */}
          <button
            className="absolute left-4 text-white text-4xl z-10"
            onClick={handlePrev}
            disabled={selectedIndex === 0}
          >
            &#10094;
          </button>

          {/* Image en plein écran */}
          <div className="relative max-w-4xl">
            <Image
              src={images[selectedIndex].secure_url}
              alt="Image fullscreen"
              width={800}
              height={600}
              className="object-contain"
            />
            {/* Bouton pour fermer */}
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>

          {/* Flèche droite pour l'image suivante */}
          <button
            className="absolute right-4 text-white text-4xl z-10"
            onClick={handleNext}
            disabled={selectedIndex === images.length - 1}
          >
            &#10095;
          </button>
        </div>
      )}

      {/* Fond flou quand l'image est en plein écran */}
      {selectedIndex !== null && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>}
    </div>
  );
}
