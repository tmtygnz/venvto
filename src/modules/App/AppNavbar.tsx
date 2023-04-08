import { Logo } from "@/components/Logo";
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ExitIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { Session } from "inspector";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { RefAttributes, useRef } from "react";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import { AriaButtonProps, useButton } from "@react-aria/button";

export const Navbar = () => {
  const session = useSession();
  const router = useRouter();

  const logoutUser = async () => {
    signOut().then(() => router.push("/login"));
  };

  return (
    <div className="pt-5 px-5 w-full flex justify-between items-center animate-fadeIn fixed">
      <div className="flex h-full gap-2 items-center">
        <Logo className="h-10 w-10" />
        <span className="text-xl font-bold text-[#8e8e8e]">Venvto</span>
      </div>
      <div className="flex h-full gap-2 items-center bg-white bg-opacity-5 p-1 rounded-full">
        <Popover.Root>
          <Popover.Trigger asChild>
            <Image
              src={session.data?.user?.image!}
              alt="something"
              width={32}
              height={32}
              className="h-[32px] w-[32px] rounded-full"
            />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              sideOffset={5}
              className="min-w-[200px] border rounded-lg bg-[#111111] shadow-md border-white border-opacity-20 py-1 mt-1 mr-3"
            >
              <ul>
                <PopoverItem>Profile</PopoverItem>
                <PopoverItem>Settings</PopoverItem>
                <PopoverItem onPress={() => alert("hu")}>Log out</PopoverItem>
              </ul>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
};

const PopoverItem = ({
  ...props
}: { children: React.ReactNode } & AriaButtonProps<"button">) => {
  let ref = useRef<HTMLLIElement | null>(null);
  let { buttonProps } = useButton({ elementType: "li", ...props }, ref);
  let { children } = props;
  return (
    <li
      className="py-2 px-2 w-full flex items-center justify-between hover:bg-white hover:bg-opacity-5 pl-4 font-medium transition"
      ref={ref}
      {...buttonProps}
    >
      {children}
    </li>
  );
};
