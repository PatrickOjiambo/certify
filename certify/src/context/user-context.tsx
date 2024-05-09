import { createContext } from "react";
import { StudentAccount } from "@/types/student";
import { TeachingInstitution } from "@/types/teaching-institution";
export interface ContextType {
  data: StudentAccount | TeachingInstitution | undefined;
}
const defaultContext: ContextType = {
  data: undefined,
};
export const UserContext = createContext<ContextType>(defaultContext);
