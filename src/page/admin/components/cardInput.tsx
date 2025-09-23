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
import { MdAdd } from "react-icons/md";

import { useAdminDashboardContext } from "../bloc/useStudentSpaceContext";

import FilePicker from "./file_picker";

import { mentions, classes } from "@/core/constant";

export const CardWithForm = () => {
  const {
    setLessonTitle,
    sendToServer,
    setAuthorName,
    setMention,
    setLevel,
    setBranche,
    mention,
  } = useAdminDashboardContext();

  return (
    <div className=" flex flex-col gap-5 w-1/2">
      <Card>
        <CardContent>
          <form>
            <div className="  grid w-full  items-center gap-4">
              <div className="flex flex-col gap- space-y-1.5">
                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Lesson Title
                </Label>
                <input
                  onChange={(e) => setLessonTitle(e.target.value)}
                  placeholder="Ex : Chimie organique "
                  className="   h-12  pl-4 pr-11 placeholder:text-lg   text-lg border-1 bg-gray-100 rounded-sm focus:outline-none  focus:ring-0 transition-all duration-300"
                />
                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Author Name
                </Label>
                <input
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Ex : Rakoto"
                  className="   h-12  pl-4 pr-11 placeholder:text-lg   text-lg border-1 bg-gray-100 rounded-sm focus:outline-none  focus:ring-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="name"
                  className=" text-lg text-green-700 font-semibold"
                >
                  Mention
                </Label>
                <div className=" flex gap-4">
                  <Select onValueChange={setMention}>
                    <SelectTrigger>
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
                    <SelectTrigger>
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
                    <SelectTrigger>
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
        <CardFooter className="flex justify-end"></CardFooter>
        <div className=" flex w-full justify-end">
          <Button
            className=" bg-green-700 hover:bg-green-900 flex w-1/5"
            onClick={sendToServer}
          >
            <div className=" flex  py-2 px-4 justify-center items-center gap-1">
              <MdAdd className=" text-3xl" /> <p className=" text-xl">Add</p>
            </div>
          </Button>
        </div>
      </Card>
    </div>
  );
};
