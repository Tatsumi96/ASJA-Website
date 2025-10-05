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
import { MdLock, MdPerson2, MdPhone } from "react-icons/md";

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
          <p className=" flex w-full justify-center font-semibold text-3xl text-gray-500 pb-10">
            Ajouter un etudiant
          </p>
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
                      />
                    </div>
                  </div>{" "}
                  <div className="flex flex-col w-1/2">
                    {" "}
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
                    className="pl-10 pr-3 bg-gray-200"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col py-2.5">
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
                    <SelectTrigger className=" w-full bg-gray-100">
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
        <CardFooter>
          <Button
            className=" bg-green-700 hover:bg-green-900 flex w-full cursor-pointer p-6"
            onClick={register}
          >
            <p className=" text-xl">Ajouter l'etudiant</p>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
