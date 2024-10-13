// components/ImageGrid.tsx

import React from "react";
import type { ImageProps } from "../utils/types";

const ImageGrid: React.FC<{ images: ImageProps[] }> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <div key={image.public_id} className="overflow-hidden rounded-lg">
          <img
            src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,h_300,w_300/${image.public_id}`}
            alt={image.public_id}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
