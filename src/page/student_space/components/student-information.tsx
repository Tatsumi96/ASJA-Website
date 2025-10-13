import { Card } from '@/components/ui/card';

import { MdPerson } from 'react-icons/md';
import { useStudentPortalContext } from '../bloc/useStudentSpaceContext';
import { Button } from '@/components/ui/button';
import Badge from '@mui/material/Badge';

export const StudentInformation = () => {
  const { userData } = useStudentPortalContext();
  return (
    <div className=" flex flex-col gap-5">
      <Card className="transition-all duration-500 h-full bg-transparent p-5 pt-8 justify-between">
        <div className=" flex flex-col gap-10">
          <section className=" flex flex-col items-center justify-center">
            {userData?.imageUrl ? (
              <img
                src={userData?.imageUrl}
                alt="Photo de profil"
                className="rounded-full size-50  object-cover border-2 border-gray-200 group-hover:border-green-400 transition-all duration-200"
              />
            ) : (
              <div className="rounded-full bg-gradient-to-br from-zinc-400 to-zinc-500 flex items-center justify-center text-white font-semibold">
                <MdPerson className=" size-50 p-2 z-100" />
              </div>
            )}
          </section>
          <section className="flex flex-col justify-center items-center gap-1 font-semibold  ">
            <p className="text-lg">{userData?.name}</p>
            <p>
              Mention :{' '}
              <span className="font-normal"> {userData?.mention}</span>{' '}
            </p>
            <p>
              Branche: <span className="font-normal"> {userData?.branche}</span>{' '}
            </p>
            <p>
              Niveau: <span className="font-normal"> {userData?.level}</span>
            </p>
            <p>
              Matricule:
              <span className="font-normal"> {userData?.identifier}</span>{' '}
            </p>
            <div className="flex w-full justify-center gap-3 p-10">
              <Badge
                className={`${
                  userData?.Premier ? 'bg-green-600' : 'bg-red-600'
                } text-white rounded-2xl px-4`}
              >
                Tranche 1
              </Badge>
              <Badge
                className={`${
                  userData?.Deuxieme ? 'bg-green-600' : 'bg-red-600'
                } text-white  rounded-2xl px-4`}
              >
                Tranche 2
              </Badge>
              <Badge
                className={`${
                  userData?.Troisieme ? 'bg-green-600' : 'bg-red-600'
                } text-white  rounded-2xl px-4`}
              >
                Tranche 3
              </Badge>
            </div>
          </section>
        </div>
        <Button className=" bg-red-700 hover:bg-red-900 flex w-full cursor-pointer p-6">
          <p className=" text-xl dark:text-white">Se deconnecter</p>
        </Button>
      </Card>
    </div>
  );
};
