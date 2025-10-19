import { Card } from '@/components/ui/card';

import { MdPerson } from 'react-icons/md';
import { useStudentPortalContext } from '../bloc/useStudentSpaceContext';
import Badge from '@mui/material/Badge';

export const StudentInformation = () => {
  const { userData } = useStudentPortalContext();

  return (
    <div className="flex flex-col md:w-1/2 w-full">
      <Card className="transition-all duration-500 border-0 shadow-none h-full  bg-transparent md:p-5 pt-8 md:justify-between">
        <div className=" p-[10px] pt-[25px]  dark:shadow-gray-950 rounded-3xl flex flex-col gap-5">
          <section className=" flex flex-col items-center justify-center">
            {userData?.imageUrl ? (
              <div className="rounded-full border-5 border-green-700 p-1">
                <img
                  src={userData?.imageUrl}
                  alt="Photo de profil"
                  className="rounded-full size-50  object-cover "
                />
              </div>
            ) : (
              <div className="rounded-full bg-gradient-to-br from-zinc-400 to-zinc-500 flex items-center justify-center text-white font-semibold">
                <MdPerson className=" size-50 p-2 z-100" />
              </div>
            )}
          </section>
          <section className="flex flex-col justify-center w-full  items-center gap-1 font-semibold  ">
            <p className="text-xl pb-5">
              {userData?.name + ' ' + userData?.lastName}
            </p>
            <p>
              Mention :{' '}
              <span className="font-normal"> {userData?.mention}</span>{' '}
            </p>
            <p>
              Branche:{' '}
              <span className="font-normal"> {userData?.branche}</span>{' '}
            </p>
            <p>
              Niveau: <span className="font-normal"> {userData?.level}</span>
            </p>
            <p>
              Matricule:
              <span className="font-normal"> {userData?.identifier}</span>{' '}
            </p>
            <div className="flex flex-col  w-full justify-center gap-3 p-5 md:py-4 md:px-8 mt-5">
              <Badge
                className={`${
                  userData?.Premier ? 'bg-green-600' : 'bg-red-600'
                } text-white rounded-2xl px-4 py-2 flex justify-center`}
              >
                Tranche 1
              </Badge>
              <Badge
                className={`${
                  userData?.Deuxieme ? 'bg-green-600' : 'bg-red-600'
                } text-white  rounded-2xl px-4 py-2 flex justify-center`}
              >
                Tranche 2
              </Badge>
              <Badge
                className={`${
                  userData?.Troisieme ? 'bg-green-600' : 'bg-red-600'
                } text-white  rounded-2xl px-4 py-2 flex justify-center`}
              >
                Tranche 3
              </Badge>
            </div>
          </section>
        </div>
      </Card>
    </div>
  );
};
