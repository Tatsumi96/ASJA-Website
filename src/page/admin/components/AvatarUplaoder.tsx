import React, { useRef } from "react";
import { MdPerson } from "react-icons/md";

interface AvatarProps {
  image: string;
  onCallBack: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AvatarUploader: React.FC<AvatarProps> = ({
  image,
  onCallBack,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center gap-2 pb-13">
      <div
        className="relative group cursor-pointer"
        onClick={handleAvatarClick}
      >
        {image ? (
          <img
            src={image}
            alt="Photo de profil"
            className="rounded-full size-50 object-cover border-2 border-gray-200 group-hover:border-green-400 transition-all duration-200"
          />
        ) : (
          <div className="rounded-full bg-gradient-to-br from-zinc-400 to-zinc-500 flex items-center justify-center text-white font-semibold">
            <MdPerson className=" size-50 p-2 z-100" />
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onCallBack}
        className="hidden"
      />
      {image ? null : (
        <p className="font-semibold text-green-700 dark:text-white transition-all duration-500">
          Ajouter une photo
        </p>
      )}
    </div>
  );
};
