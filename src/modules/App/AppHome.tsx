import { Button } from "@/components/Button";
import { Navbar } from "./AppNavbar";
import { PlusIcon, TrashIcon, ValueNoneIcon } from "@radix-ui/react-icons";
import * as Tabs from "@radix-ui/react-tabs";
import { useSession } from "next-auth/react";
import { CreatedEvents } from "./CreatedEvents";

export const AppHome = () => {
  const session = useSession();
  return (
    <div>
      <Navbar />
      <div className="px-48 py-40 flex flex-col gap-10">
        <div className="w-full items-center justify-between flex">
          <div className="flex gap-1 items-center">
            <span className="animate-shake text-2xl hover:animate-shake">
              👋
            </span>
            <span className="font-bold text-2xl">
              Hello, {session.data?.user?.name!}
            </span>
          </div>
          <Button>
            <div className="w-full h-full items-center justify-center flex">
              <PlusIcon className="h-5 w-5" />
            </div>
          </Button>
        </div>
        <Tabs.Root className="w-full flex flex-col h-full">
          <Tabs.List className="flex font-semibold gap-7">
            <Tabs.Trigger
              value="crtd"
              className="px-3 py-2 border-b-2 border-[#a5c1fb] data-[state=active]:border-opacity-50 data-[state=inactive]:border-opacity-0 "
            >
              Your Events
            </Tabs.Trigger>
            <Tabs.Trigger
              value="fyp"
              className="px-3 py-2 border-b-2 border-[#a5c1fb] data-[state=active]:border-opacity-50 data-[state=inactive]:border-opacity-0"
            >
              Joined Events
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.TabsContent value="crtd" className="w-full h-full">
            <CreatedEvents />
          </Tabs.TabsContent>
        </Tabs.Root>
      </div>
    </div>
  );
};
