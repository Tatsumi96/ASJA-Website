import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MdCancel, MdLock, MdPerson2, MdPhone } from 'react-icons/md';

import { useAdminDashboardContext } from '../bloc/useAdminContext';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { classes, mentions } from '@/core/types';
import { useModalContext } from '../bloc/useModalContext';
import { AvatarUploader } from './avatar-uploader';

export const CardInputUser = () => {
  const {
    setMention,
    setLevel,
    level,
    setBranche,
    mention,
    setName,
    branche,
    setLastName,
    setPassword,
    setContact,
    sendStudentInformation,
    handleImageChange,
    image,
    isPremierPaid,
    isDeuxiemePaid,
    isTroisiemePaid,
    setIsPremierPaid,
    setIsDeuxiemePaid,
    setIsTroisiemePaid,
    name,
    lastName,
    contact,
    password,
  } = useAdminDashboardContext();

  const { closeAddUser } = useModalContext();

  return (
    <div className=" flex flex-col gap-5 w-1/2">
      <Card className=" transition-all duration-500 p-5 border-t-green-600 border-t-4 ">
        <CardContent>
          <MdCancel
            onClick={() => {
              closeAddUser();
            }}
            className=" text-green-600 dark:text-white text-4xl cursor-pointer absolute  hover:scale-125 transition-all duration-300"
          />
          <p className=" flex w-full justify-center font-semibold text-3xl text-gray-500 pb-10">
            Ajouter un etudiant
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
                        value={name.toLocaleUpperCase()}
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

                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Mot de passe
                </Label>
                <div className=" relative w-full">
                  <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                  <Input
                    value={password}
                    className="pl-10 pr-3 bg-gray-200"
                    onChange={(e) => setPassword(e.target.value)}
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
                        mentions[mention] &&
                        mentions[mention][level] &&
                        mentions[mention][level].map((branche) => (
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
          <div className=" flex w-full gap-2 items-center justify-center pt-5">
            <Checkbox
              checked={isPremierPaid}
              onCheckedChange={() => setIsPremierPaid((value) => !value)}
              className="cursor-pointer w-5 h-5 "
            />
            <p className=" text-green-700 font-semibold dark:text-white">
              Tranche 1
            </p>
            <Checkbox
              checked={isDeuxiemePaid}
              onCheckedChange={() => setIsDeuxiemePaid((value) => !value)}
              className="cursor-pointer w-5 h-5"
            />
            <p className=" text-green-700 font-semibold dark:text-white">
              Tranche 2
            </p>
            <Checkbox
              checked={isTroisiemePaid}
              onCheckedChange={() => setIsTroisiemePaid((value) => !value)}
              className="cursor-pointer w-5 h-5"
            />
            <p className=" text-green-700 font-semibold dark:text-white">
              Tranche 3
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-0">
          <Button
            className=" bg-green-700 hover:bg-green-900 flex w-full cursor-pointer p-6"
            onClick={sendStudentInformation}
          >
            <p className=" text-xl">Ajouter l'etudiant</p>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
