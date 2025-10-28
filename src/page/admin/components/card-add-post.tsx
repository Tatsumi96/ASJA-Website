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
import { MdCancel, MdNewspaper } from 'react-icons/md';

import { useAdminDashboardContext } from '../bloc/useAdminContext';

import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { classes, mentions } from '@/core/types';
import { useModalContext } from '../bloc/useModalContext';
import { UploadAndViewImage } from './upload-view-image';

export const CardAddPost = () => {
  const {
    setMention,
    setLevel,
    level,
    setBranche,
    mention,
    branche,
    sendPost,
    setDescription,
    setPostTitle,
    description,
    postTitle,
    handleImageChange,
    image,
  } = useAdminDashboardContext();

  const { closeAddPost } = useModalContext();

  return (
    <div className=" flex flex-col gap-5 w-1/2">
      <Card className="transition-all duration-500 p-5">
        <MdCancel
          onClick={() => {
            closeAddPost();
          }}
          className=" text-green-600 dark:text-white text-4xl  cursor-pointer absolute  hover:scale-125 transition-all duration-300"
        />
        <p className=" flex w-full justify-center font-semibold text-3xl text-gray-500">
          Publier une annonce
        </p>
        <ScrollArea className="h-[80vh]">
          <CardContent>
            <form>
              <div className="  grid w-full  items-center gap-4">
                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Titre
                </Label>
                <div className="relative w-full">
                  <MdNewspaper className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                  <Input
                    className="pl-10 pr-3 bg-gray-200"
                    onChange={(e) => setPostTitle(e.target.value)}
                    value={postTitle.toLocaleUpperCase()}
                  />
                </div>

                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Description
                </Label>
                <Textarea
                  placeholder="Ecrivez votre annonce"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-30"
                />

                <div className="flex flex-col justify-between gap-5 py-2.5">
                  <UploadAndViewImage
                    image={image as string}
                    onCallBack={handleImageChange}
                  />
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
          </CardContent>
          <CardFooter className="p-0">
            <Button
              className=" bg-green-700 hover:bg-green-900 flex w-full cursor-pointer p-6"
              onClick={sendPost}
            >
              <p className=" text-xl">Publier</p>
            </Button>
          </CardFooter>
        </ScrollArea>
      </Card>
    </div>
  );
};
