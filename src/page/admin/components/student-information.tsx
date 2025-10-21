import { Card } from '@/components/ui/card';

import type { UserDto } from '@/features/mention/user.dto';
import { MdCancel, MdPerson } from 'react-icons/md';
import { useModalContext } from '../bloc/useModalContext';

export const StudentInformation = ({ student }: { student: UserDto }) => {
  const { closeStudentInfo } = useModalContext();

  return (
    <div className=" flex flex-col gap-5 w-1/3">
      <Card className="transition-all duration-500 p-5 border-l-4 border-l-green-600">
        <MdCancel
          onClick={() => {
            closeStudentInfo();
          }}
          className=" text-green-600 dark:text-white text-4xl cursor-pointer absolute  hover:scale-125 transition-all duration-300"
        />
        <section className="flex justify-center">
          <p className=" font-bold text-2xl text-green-600">Etudiant</p>
        </section>
        <section className=" flex gap-12 px-5 pb-7 justify-center">
          {student.imageUrl ? (
            <div className="rounded-full border-5 border-green-700 p-1">
              <img
                src={student.imageUrl}
                alt="Photo de profil"
                className="rounded-full size-50 object-cover transition-all duration-200"
              />
            </div>
          ) : (
            <div className="rounded-full bg-gradient-to-br from-zinc-400 to-zinc-500 flex items-center justify-center text-white font-semibold">
              <MdPerson className=" size-50 p-2 z-100" />
            </div>
          )}
          <section className="flex flex-col justify-center gap-1 font-semibold  ">
            <p>
              Nom : <span className="font-normal">{student.name}</span>{' '}
            </p>
            <p>
              Prenom :{' '}
              <span className="font-normal">{student.lastName}</span>{' '}
            </p>
            <p>
              Matricule:
              <span className="font-normal"> {student.identifier}</span>{' '}
            </p>
            <p>
              Contact:{' '}
              <span className="font-normal"> {student.contact}</span>{' '}
            </p>
            <p>
              Niveau: <span className="font-normal"> {student.level}</span>
            </p>
            <p>
              Mention :{' '}
              <span className="font-normal"> {student.mention}</span>{' '}
            </p>
            <p>
              Branche:{' '}
              <span className="font-normal"> {student.branche}</span>{' '}
            </p>
          </section>
        </section>
      </Card>
    </div>
  );
};
