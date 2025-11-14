import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { useStudentPortalContext } from '../bloc/useStudentSpaceContext';
import { StudentInfoSkeleton } from './student-info-skeleton';

const PaymentBadge = ({ paid }: { paid: boolean }) => (
  <div
    className={`flex items-center justify-center size-10 rounded-full text-white shadow-lg ${
      paid ? 'bg-green-500' : 'bg-red-500'
    }`}
  >
    {paid ? <CheckCircle size={24} /> : <XCircle size={24} />}
  </div>
);

export const StudentInformation = () => {
  const { userData, isLoading } = useStudentPortalContext();

  if (isLoading) {
    return <StudentInfoSkeleton />;
  }

  return (
    <div className="w-full h-full">
      <Card className="transition-all duration-500 border-0 shadow-none h-full bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl">
        <div className="p-6 flex flex-col gap-6 text-white">
          <motion.section
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative">
              <img
                src={userData?.imageUrl}
                alt="Photo de profil"
                className="rounded-full size-48 object-cover border-4 border-green-500 shadow-lg"
              />
            </div>
          </motion.section>
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col justify-center w-full items-center gap-2"
          >
            <h2 className="text-2xl font-bold drop-shadow-lg">
              {userData?.name} {userData?.lastName}
            </h2>
            <div className="flex w-full justify-center gap-4 py-4 mt-4">
              <PaymentBadge paid={userData?.Premier ?? false} />
              <PaymentBadge paid={userData?.Deuxieme ?? false} />
              <PaymentBadge paid={userData?.Troisieme ?? false} />
            </div>
            <div className="text-center text-gray-200 space-y-1">
              <p>
                <span className="font-semibold">Mention :</span>{' '}
                {userData?.mention}
              </p>
              <p>
                <span className="font-semibold">Branche :</span>{' '}
                {userData?.branche}
              </p>
              <p>
                <span className="font-semibold">Niveau :</span> {userData?.level}
              </p>
              <p>
                <span className="font-semibold">Matricule :</span>{' '}
                {userData?.identifier}
              </p>
            </div>
          </motion.section>
        </div>
      </Card>
    </div>
  );
};
