import { useDropzone } from 'react-dropzone';
import { FaFile } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { useAdminDashboardContext } from '../bloc/useAdminContext';

const FilePicker: React.FC = () => {
  const {
    handleCancel,
    onDrop,
    handleFileChange,
    fileInputRef,
    selectedFile,
    fileSize,
  } = useAdminDashboardContext();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'application/pdf': [],
      'application/msword': [],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        [],
    },
  });

  return (
    <div className="flex flex-col w-full items-center">
      <div {...getRootProps()} className="flex flex-col w-full">
        <div className=" flex justify-center rounded-2xl bg-gray-100 dark:bg-zinc-800 border-green-700 border-2 border-dashed transition-all duration-300 transform  ">
          <label
            htmlFor="file-upload"
            className="cursor-pointer mx-10 my-5 w-full flex flex-col justify-center items-center  border-0 p-2 "
          >
            <FaFile className="text-green-700 flex text-7xl m-10 " />
            <p className=" text-center text-lg py-5">
              {' '}
              {isDragActive
                ? 'Deposer votre fichier'
                : 'Glisser et deposer votre fichier ou cliquer ici'}{' '}
            </p>
          </label>
        </div>
        <input
          {...getInputProps()}
          className="hidden"
          type="file"
          id="file-upload"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        {selectedFile && (
          <div className="mt-10 flex gap-5 flex-wrap justify-center items-center">
            Fichier selectionne :{' '}
            <p className=" font-bold">{selectedFile.name}</p> ({fileSize} Mo)
            {selectedFile && (
              <button
                className="border-0 cursor-pointer bg-red-600 hover:bg-red-900 rounded-sm "
                onClick={handleCancel}
              >
                <p className="  px-4 py-2 text-white font-bold">
                  {' '}
                  <MdDelete />
                </p>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilePicker;
