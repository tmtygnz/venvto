import { Button } from "@/components/Button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const CreatedEvents = () => {
  return (
    <div className="w-full h-full flex items-center justify-center mt-10 flex-col gap-2">
      <MagnifyingGlassIcon className="h-28 w-28" />
      <span className="font-bold text-xl">Create new event</span>
      <span>Create, invite and organize events!</span>
      <Button className="mt-5">Create Event</Button>
    </div>
  );
};
