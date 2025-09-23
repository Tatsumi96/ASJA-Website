import { authRepository } from "@/injection";
import { useTheme } from "@/page/theme/useTheme";
import { useState } from "react";
import { toast } from "sonner";

export const useAuth = () => {
  const [matricule, setMatricule] = useState<number>();
  const [password, setPassword] = useState<string>("");

  const logIn = async (navigate: (path: string) => void) => {
    const result = await authRepository.logIn({
      identifier: matricule as number,
      password,
      role: "Student",
    });
    if (result.status == "failure")
      return toast.error("Erreur", {
        description: "Matricule ou Mot de passe incorrect",
      });
    navigate("/studentSpace");
  };
  useTheme();

  return { setMatricule, setPassword, logIn };
};
