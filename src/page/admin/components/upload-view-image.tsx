import React, { useRef } from 'react';

interface AvatarProps {
  image: string;
  onCallBack: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadAndViewImage: React.FC<AvatarProps> = ({
  image,
  onCallBack,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-start gap-2 ">
      <div
        className="relative group cursor-pointer w-full"
        onClick={handleAvatarClick}
      >
        {image ? (
          <div className="aspect-[16/9]">
            {' '}
            <img
              src={image}
              alt={image}
              className="h-100 w-full border-2 border-gray-200 rounded-2xl transition-all duration-200"
            />{' '}
          </div>
        ) : (
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-gray-100 dark:bg-zinc-800  w-full flex  rounded-2xl p-2 "
          >
            <p className=" text-center text-lg text-gray-600 p-1">
              {' '}
              {image ? '' : 'Cliquez pour ajouter une image'}{' '}
            </p>
          </label>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onCallBack}
        className="hidden"
      />
    </div>
  );
};
