import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { MdCancel, MdPerson2, MdPhone } from 'react-icons/md';

import { useAdminDashboardContext } from '../bloc/useStudentSpaceContext';

import { mentions, classes } from '@/core/types';
import { Input } from '@/components/ui/input';
import { useModalContext } from '../bloc/useModalContext';
import { AvatarUploader } from './avatar-uploader';

export const CardUpdateUser = () => {
  const {
    setMention,
    setLevel,
    level,
    setBranche,
    mention,
    setName,
    branche,
    setLastName,
    setContact,
    updateUserInformation,
    handleImageChange,
    image,
    name,
    lastName,
    contact,
    setImage,
  } = useAdminDashboardContext();

  const { closeUpdateUser } = useModalContext();

  return (
    <div className=" flex flex-col gap-5 w-1/2">
      <Card className="transition-all duration-500 p-5">
        <CardContent>
          <MdCancel
            onClick={() => {
              setName('');
              setLastName('');
              setContact('');
              setImage('');
              closeUpdateUser();
            }}
            className=" text-green-600 dark:text-white text-4xl cursor-pointer absolute  hover:scale-125 transition-all duration-300"
          />
          <p className=" flex w-full justify-center font-semibold text-3xl text-gray-500 pb-10">
            Modification les informations
          </p>
          <AvatarUploader
            image={image as string}
            onCallBack={handleImageChange}
          />
          <form>
            <div className="  grid w-full  items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <div className="flex gap-3">
                  <div className="flex flex-col w-1/2">
                    <Label
                      htmlFor="name"
                      className=" text-lg font-semibold text-green-700"
                    >
                      Nom
                    </Label>
                    <div className="relative w-full">
                      <MdPerson2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                      <Input
                        placeholder="Nom"
                        className="pl-10 pr-3 bg-gray-200"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                  </div>{' '}
                  <div className="flex flex-col w-1/2">
                    {' '}
                    <Label
                      htmlFor="name"
                      className=" text-lg font-semibold text-green-700"
                    >
                      Prénom
                    </Label>
                    <div className="relative w-full">
                      <MdPerson2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                      <Input
                        className="pl-10 pr-3 bg-gray-200"
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Prénom"
                        value={lastName}
                      />
                    </div>
                  </div>
                </div>

                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Contact
                </Label>
                <div className="relative w-full">
                  <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                  <Input
                    className="pl-10 pr-3 bg-gray-200"
                    type="number"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                  />
                </div>
              </div>
              <div className="flex flex-col py-2.5">
                <div className=" flex gap-4">
                  <Select value={mention} onValueChange={setMention}>
                    <SelectTrigger className="w-full bg-gray-200">
                      <SelectValue placeholder="Mention" />
                    </SelectTrigger>
                    <SelectContent className="z-[900]">
                      {Object.keys(mentions).map((mainBranche) => (
                        <SelectItem key={mainBranche} value={mainBranche}>
                          {mainBranche.replace(/_/g, '   ')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select onValueChange={setLevel} value={level}>
                    <SelectTrigger className="w-full bg-gray-200">
                      <SelectValue placeholder="Niveau" />
                    </SelectTrigger>
                    <SelectContent className="z-[900]">
                      {classes.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    onValueChange={setBranche}
                    value={branche}
                    disabled={!mention || level == 'L1' || level == 'L2'}
                  >
                    <SelectTrigger className=" w-full bg-gray-100">
                      <SelectValue placeholder="Branche" />
                    </SelectTrigger>
                    <SelectContent className="z-[900]">
                      {mention &&
                        mentions[mention].map((branche) => (
                          <SelectItem key={branche} value={branche}>
                            {branche}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="p-0">
          <Button
            className=" bg-green-700 hover:bg-green-900 flex w-full cursor-pointer p-6"
            onClick={updateUserInformation}
          >
            <p className=" text-xl">Modifier</p>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
