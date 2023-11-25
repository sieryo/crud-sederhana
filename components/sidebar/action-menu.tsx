import Link from "next/link";
import { authUserSession } from "@/lib/auth-lib";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { DoorOpen, Outdent, SettingsIcon, UserCircle } from "lucide-react";

export const ActionMenu = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  const actionIcon = user ? (
    <Outdent className="lg:w-6 text-red-500" />
  ) : (
    <DoorOpen className=" lg:w-6 text-green-500" />
  );

  const DEFAULT_STYLES =
    "hover:bg-slate-200 w-full p-2 rounded-md px-3 flex gap-2 items-center";

  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Settings">
          {user && (
            <CommandItem>
              <Link className={DEFAULT_STYLES} href={"/profile"}>
                <UserCircle className=" lg:w-6 text-blue-500" />
                <span>Profile</span>
              </Link>
            </CommandItem>
          )}
          <CommandItem>
            <Link className={DEFAULT_STYLES} href={actionURL}>
              {actionIcon}
              <span>{actionLabel}</span>
            </Link>
          </CommandItem>
          <CommandItem>
            <Link className={DEFAULT_STYLES} href={"/settings"}>
              <SettingsIcon className=" lg:w-6 text-slate-500" />
              <span>Settings</span>
            </Link>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
