import { logUseCase } from "@/injection";
import { useState } from "react";

export const useAuth = () => {
  const [matricule, setMatricule] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const logIn = async () => {
    const result = await logUseCase.execute({
      identifier: matricule,
      password,
    });
    if (result.status == "failure") return console.log("not logged in");
    return console.log("logged in");
  };

  return { setMatricule, setPassword, logIn };
};
