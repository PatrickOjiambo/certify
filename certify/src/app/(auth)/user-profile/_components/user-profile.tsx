"use client";

import { useUser } from "@/hooks/useUser";
import { TeachingInstitution } from "@/types/teaching-institution";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const UserProfile = () => {
  const { data: userData } = useUser();

  if (!userData) {
    return (
      <div className="text-xs text-center my-4  text-muted-foreground">
        No account data has been found , connnect your wallet and create a
        teaching institution or student account
      </div>
    );
  }
  return (
    <div>
      {userData instanceof TeachingInstitution ? (
        <div className="space-y-8">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              disabled
              id="name"
              defaultValue={userData.name}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="wallet_address">Wallet Address</Label>
            <Input
              type="text"
              disabled
              id="wallet_address"
              defaultValue={userData.wallet_address}
            />
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              disabled
              id="name"
              defaultValue={userData.name}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="registration_number">Registration Number</Label>
            <Input
              type="text"
              disabled
              id="registration_number"
              defaultValue={userData.reg_number}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="university_name">University Name</Label>
            <Input
              type="text"
              disabled
              id="university_name"
              defaultValue={userData.university_name}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="course_name">Course Name</Label>
            <Input
              type="text"
              disabled
              id="course_name"
              defaultValue={userData.course_name}
            />
          </div>
        </div>
      )}
    </div>
  );
};
