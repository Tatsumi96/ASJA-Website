import type { UserDto } from '@/features/mention/user.dto';
import { useModalContext } from '../bloc/useModalContext';
import { useAdminDashboardContext } from '../bloc/useStudentSpaceContext';
import { EditButton } from './edit-button';

export const UpdateUserButton = ({ user }: { user: UserDto }) => {
  const {
    setMention,
    setLevel,
    setBranche,
    setName,
    setLastName,
    setContact,
    setImage,
    setUserMatricule,
  } = useAdminDashboardContext();

  const { openUpdateUser } = useModalContext();

  const callUpdateStudent = () => {
    setUserMatricule(user.identifier);
    setName(user.name);
    setLastName(user.lastName);
    setContact(user.contact);
    setMention(user.mention);
    setBranche(
      user.level == 'L3' && user.mention == 'LANGUE ET CULTURE'
        ? ''
        : user.branche
    );
    setLevel(user.level);
    setImage(user.imageUrl);
    openUpdateUser();
  };

  return <EditButton callBack={callUpdateStudent} />;
};
