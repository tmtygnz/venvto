import { CaretDownIcon, CodeIcon, GlobeIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const Navbar = () => {
  return (
    <div className="p-5 border-b fixed w-full">
      <NavigationMenu.Root className="relative z-[1] ">
        <NavigationMenu.List className="flex justify-center">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Features{" "}
              <CaretDownIcon
                className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content className="absolute top-0 left-0 sm:w-auto data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight">
              <div className="flex h-full w-96 gap-5 p-3">
                <div className="flex flex-col gap-3">
                  <div className="px-3 py-3 hover:bg-black hover:bg-opacity-10 flex flex-col rounded-xl transition">
                    <span className="text-lg font-bold">Track</span>
                    <span className="opacity-50 text-sm">
                      Our app provides easy tracking of RSVPs and post-event
                      feedback to help you stay organized and improve future
                      events.
                    </span>
                  </div>
                  <div className="px-3 py-3 hover:bg-black hover:bg-opacity-10 flex flex-col rounded-xl transition">
                    <span className="text-lg font-bold">Messaging</span>
                    <span className="opacity-50 text-sm">
                      Our app supports messaging for easy communication with
                      your guests.
                    </span>
                  </div>
                  <div className="px-3 py-3 hover:bg-black hover:bg-opacity-10 flex flex-col rounded-xl transition">
                    <span className="text-lg font-bold">Event Organizing</span>
                    <span className="opacity-50 text-sm">
                      Event management with our app is made simple and
                      convenient, allowing you to easily plan and organize
                      virtual events with all necessary features and tools in
                      one solution.
                    </span>
                  </div>
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Developers{" "}
              <CaretDownIcon
                className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content className="absolute top-0 left-0 sm:w-auto data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight">
              <div className="flex h-full w-96 gap-5 p-3">
                <div className="flex flex-col gap-3 w-full">
                  <div className="px-3 py-3 hover:bg-black hover:bg-opacity-10 flex w-full flex-col rounded-xl transition">
                    <div className="flex gap-2 items-center">
                      <CodeIcon className="h-5 w-5" />
                      <span className="font-semibold">Javascript SDK</span>
                    </div>
                    <span className="opacity-50 text-sm">
                      Our JavaScript SDK allows developers to easily integrate
                      our app&apos;s features and functionality into their own
                      web applications.
                    </span>
                  </div>
                  <div className="px-3 py-3 hover:bg-black hover:bg-opacity-10 flex w-full flex-col rounded-xl transition">
                    <div className="flex gap-2 items-center">
                      <GlobeIcon className="h-5 w-5" />
                      <span className="font-semibold">Web API</span>
                    </div>
                    <span className="opacity-50 text-sm">
                      Our web API provides a standardized way for developers to
                      access and interact with the data and functionality of our
                      app, making it easy to build custom integrations and
                      applications.
                    </span>
                  </div>
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-[#1e1e1e] border border-white border-opacity-30" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="absolute top-full left-0 flex w-full justify-center ">
          <NavigationMenu.Viewport className="rounded-2xl data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden bg-[#1e1e1e] border border-white border-opacity-30 transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};
