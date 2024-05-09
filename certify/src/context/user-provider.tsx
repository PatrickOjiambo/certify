"use client";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { UserContext } from "./user-context";
import { getUserDataFromLogin } from "@/db/getions";
import { StudentAccount } from "@/types/student";
import { TeachingInstitution } from "@/types/teaching-institution";
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<StudentAccount | TeachingInstitution>();
  const { address } = useAccount();
  useEffect(() => {
    const getData = async () => {
      const userData = await getUserDataFromLogin(address!);
      setData(userData);
    };
    getData();
  }, [address]);

  return (
    <UserContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
