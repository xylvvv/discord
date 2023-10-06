import { redirect } from "next/navigation";

import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";

import InitialCard from "./_components/initial-card";

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  })

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <InitialCard />
    </div>
  );
}
 
export default SetupPage;