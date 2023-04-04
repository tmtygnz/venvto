import { Logo } from "@/components/Logo";
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ExitIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { Session } from "inspector";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { RefAttributes } from "react";

export const Navbar = () => {
  const session = useSession();
  const router = useRouter();

  const logoutUser = async () => {
    signOut().then(() => router.push("/login"));
  };

  return (
    <div className="p-3 w-full flex justify-between items-center animate-fadeIn fixed">
      <div className="flex h-full gap-2 items-center">
        <Logo className="h-10 w-10" />
        <span className="text-xl font-bold text-[#8e8e8e]">Venvto</span>
      </div>
      <div className="flex h-full gap-2 items-center bg-white bg-opacity-5 p-1 rounded-full">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Avatar.Root className="rounded-full h-8 ">
              <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src={session.data?.user?.image!}
                alt={session.data?.user?.name!}
              />
              <Avatar.Fallback
                className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                delayMs={1000}
              >
                {session.data?.user?.name!}
              </Avatar.Fallback>
            </Avatar.Root>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[200px] gap-2 bg-black text-sm font-semibold bg-opacity-25 p-2 rounded-lg mr-2 shadow will-change-[opacity,transform] data-[side=top]:animate-fadeIn data-[side=right]:animate-fadeIn data-[side=bottom]:animate-fadeIn data-[side=left]:animate-fadeIn animate-scaleIn"
              sideOffset={7}
            >
              <DropDownItem>
                Profile
                <PersonIcon />
              </DropDownItem>

              <DropDownItem>
                Settings
                <GearIcon />
              </DropDownItem>
              <DropDownItem>
                Logout
                <ExitIcon />
              </DropDownItem>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

const DropDownItem = ({
  children,
  ...props
}: { children: React.ReactNode } & RefAttributes<HTMLDivElement>) => {
  return (
    <DropdownMenu.Item
      className="py-2 px-2 w-full flex items-center justify-between hover:bg-black hover:bg-opacity-10 rounded-md animate-scaleIn"
      {...props}
    >
      {children}
    </DropdownMenu.Item>
  );
};
