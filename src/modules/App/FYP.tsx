import { Button } from "@/components/Button";
import { ListBulletIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const FYP = () => {
  return (
    <div className="w-full h-full flex items-center justify-center mt-10 flex-col gap-2">
      <ListBulletIcon className="h-28 w-28" />
      <span className="font-bold text-xl">For You</span>
      <span>Active events you joined will appeare here!</span>
      <Button className="mt-5">Join Event</Button>
    </div>
  );
};
