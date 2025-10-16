import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { useAdminDashboardContext } from "../bloc/useStudentSpaceContext";

import FilePicker from "./file-picker";

import { mentions, classes } from "@/core/types";
import { Input } from "@/components/ui/input";

export const CardWithForm = () => {
  const {
    setLessonTitle,
    sendToServer,
    setAuthorName,
    setMention,
    setLevel,
    setBranche,
    mention,
    lessonTitle,
  } = useAdminDashboardContext();

  return (
    <div className=" flex flex-col gap-5 w-1/2">
      <Card className="transition-all duration-500">
        <CardContent>
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
                  value={lessonTitle.toLocaleUpperCase()}
                  onChange={(e) => setLessonTitle(e.target.value)}
                />
                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Autheur
                </Label>
                <Input
                  className="bg-gray-200"
                  onChange={(e) => setAuthorName(e.target.value)}
                />
              </div>
              <div className="flex flex-col py-2.5 space-y-1.5">
                <div className=" flex gap-4">
                  <Select onValueChange={setMention}>
                    <SelectTrigger className="w-full bg-gray-200">
                      <SelectValue placeholder="Mention" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(mentions).map((mainBranche) => (
                        <SelectItem key={mainBranche} value={mainBranche}>
                          {mainBranche.replace(/_/g, "   ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select onValueChange={setLevel}>
                    <SelectTrigger className="w-full bg-gray-200">
                      <SelectValue placeholder="Niveau" />
                    </SelectTrigger>
                    <SelectContent>
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
                    <SelectContent>
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
              <div className=" flex w-full justify-center">
                <FilePicker />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            className=" bg-green-700 hover:bg-green-900 flex w-full cursor-pointer py-6"
            onClick={sendToServer}
          >
            <p className=" text-xl">Ajouter le document</p>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
