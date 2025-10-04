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

import { mentions, classes } from "@/core/types";
import { Input } from "@/components/ui/input";

export const CardInputUser = () => {
  const {
    setMention,
    setLevel,
    setBranche,
    mention,
    setName,
    setLastName,
    setPassword,
    setContact,
    register,
  } = useAdminDashboardContext();

  return (
    <div className=" flex flex-col gap-5 w-1/2">
      <Card className="transition-all duration-500">
        <CardContent>
          <form>
            <div className="  grid w-full  items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Nom
                </Label>
                <Input onChange={(e) => setName(e.target.value)} />
                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Prénom
                </Label>
                <Input onChange={(e) => setLastName(e.target.value)} />
                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Contact
                </Label>
                <Input
                  type="number"
                  onChange={(e) => setContact(e.target.value)}
                />
                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Mot de passe
                </Label>
                <Input onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col py-2.5 space-y-1.5">
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
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end"></CardFooter>
        <div className=" flex w-full justify-end px-6">
          <Button
            className=" bg-green-700 hover:bg-green-900 flex w-1/5 cursor-pointer"
            onClick={register}
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
