import { useContext } from "react";
import { UserContext } from "@/context/user-context";

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside its context provider");
  }
  return context;
}
