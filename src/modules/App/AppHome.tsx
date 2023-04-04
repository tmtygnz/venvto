import { Button } from "@/components/Button";
import { Navbar } from "./AppNavbar";
import { PlusIcon } from "@radix-ui/react-icons";

export const AppHome = () => {
  return (
    <div>
      <Navbar />
      <div className="p-60">
        <div className="flex w-full justify-between items-center">
          <div className="">
            <span className="font-bold text-2xl">Your Events</span>
          </div>
          <Button className="w-fit">
            <div className="flex items-center gap-2">
              <PlusIcon className="h-6"/>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
