import React from 'react';
import { FaImage } from 'react-icons/fa';
import defaut from '@/assets/defaut.jpg';

interface ImageProductProps {
  image: string;
  onCallBack: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageUploader: React.FC<ImageProductProps> = ({
  image,
  onCallBack,
}) => {
  return (
    <div>
      <label
        htmlFor="image-upload"
        className="cursor-pointer flex items-center border p-2 rounded bg-gray-100"
      >
        <FaImage className="mr-2 text-lg text-green-700" /> {/* Icône image */}
        {image ? 'Choose another picture' : 'Choose a picture'}{' '}
      </label>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={onCallBack}
        className="hidden"
      />

      <div className="mt-4">
        <p className="mb-2 text-green-700">
          {image ? 'Choosen picture' : 'Default picture'} :
        </p>
        <img
          src={image ? image : defaut}
          alt="preview"
          className="w-64 h-auto rounded-2xl shadow"
        />
      </div>
    </div>
  );
};
