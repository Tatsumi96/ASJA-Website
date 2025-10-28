import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useAdminDashboardContext } from '../bloc/useAdminContext';

import FilePicker from './file-picker';

import { Input } from '@/components/ui/input';
import { classes, mentions } from '@/core/types';
import { MdCancel } from 'react-icons/md';
import { useModalContext } from '../bloc/useModalContext';

export const CardAddDoc = () => {
  const {
    setLessonTitle,
    sendToServer,
    setMention,
    setLevel,
    level,
    setBranche,
    mention,
  } = useAdminDashboardContext();

  const { closeAddDoc } = useModalContext();

  return (
    <div className=" flex flex-col gap-5 w-1/2 ">
      <Card className="transition-all duration-500 p-5 border-t-green-700 border-t-5">
        <CardContent>
          <MdCancel
            onClick={closeAddDoc}
            className=" text-green-600 dark:text-white text-4xl cursor-pointer absolute  hover:scale-125 transition-all duration-300"
          />
          <p className=" flex w-full justify-center font-semibold text-3xl text-gray-500 pb-10">
            Ajouter un document
          </p>
          <form>
            <div className="  grid w-full  items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Titre
                </Label>
                <Input
                  className="bg-gray-200"
                  onChange={(e) => setLessonTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col py-2.5 space-y-1.5">
                <div className=" flex gap-4">
                  <Select onValueChange={setMention}>
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
                  <Select onValueChange={setLevel}>
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
                  <Select onValueChange={setBranche} disabled={!mention}>
                    <SelectTrigger className="w-full bg-gray-200">
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
              <div className=" flex w-full justify-center">
                <FilePicker />
              </div>
            </div>
          </form>
        </CardContent>
        <Button
          className=" bg-green-700 hover:bg-green-900 flex w-full cursor-pointer py-6"
          onClick={sendToServer}
        >
          <p className=" text-xl">Ajouter le document</p>
        </Button>
      </Card>
    </div>
  );
};
