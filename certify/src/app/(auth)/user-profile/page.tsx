import { UserProfile } from "./_components/user-profile";
import DashboardTopBar from "@/components/topbar/page";
//import OptInButton from "./optin";

async function ProfilePage() {
  return (
    <>
      <DashboardTopBar />
      <div className="flex flex-col items-center justify-centet space-y-10 px-2 pb-[100px] w-11/12">
        <div className="flex flex-row items-center  w-full">
          {/*        <OptInButton /> */}
        </div>
        {/* Profile */}
        <UserProfile />
      </div>
    </>
  );
}

export default ProfilePage;
