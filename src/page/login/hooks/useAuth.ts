import { authRepository } from '@/injection';
import { useLangue } from '@/page/lang/useLang';
import { useState } from 'react';
import { toast } from 'sonner';

export const useAuth = () => {
  const [matricule, setMatricule] = useState<number>();
  const [password, setPassword] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const { translate } = useLangue();

  const logIn = async (navigate: (path: string) => void) => {
    const result = await authRepository.logIn({
      identifier: matricule as number,
      password,
      role: isAdmin ? 'Admin' : 'Student',
    });
    if (result.status == 'failure')
      return toast.error(translate('loginPage.erreur'), {
        description: translate('loginPage.erreurMessage'),
      });
    navigate(isAdmin ? '/admin ' : '/student-space');
  };

  const toggleIsAdmin = () => setIsAdmin((value) => !value);

  return { setMatricule, setPassword, logIn, toggleIsAdmin, isAdmin };
};
