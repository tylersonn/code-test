import Link from "next/link";
import { HomeIcon, CommandLineIcon, PaintBrushIcon, ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/solid";

// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// import { User } from './user';
import Providers from "./Providers";
import { NavItem } from "./nav-item";
import { SettingsIcon, UsersIcon, VercelLogo } from "@/components/ui/Icons";
import { SearchInput } from "@/components/Search/Search";

const links = [
  {
    text: "Eject Admins",
    href: "/",
  },
  {
    text: "Logout",
    href: "/",
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <main className="flex min-h-screen w-full flex-col bg-muted/40">
        <DesktopNav />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <SearchInput />
            <DropdownIcon />

            {/* {true === true && (
              <div className="w-min absolute top-16 right-16 rounded border border-gray-800 bg-gray-100 text-gray-900 z-50">
                <div className="text-sm text-center">{links.map(({ text, href }, index) => DropdownNavLink(text, href, index))}</div>
              </div>
            )} */}
          </header>
          <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">{children}</main>
        </div>
      </main>
    </Providers>
  );
}

function DesktopNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <VercelLogo className="h-5 w-5 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        <NavItem href="#" label="Dashboard">
          <HomeIcon className="h-7 w-7" />
        </NavItem>

        <NavItem href="#" label="Orders">
          <ShoppingCartIcon className="h-7 w-7" />
        </NavItem>

        <NavItem href="/" label="Products">
          <CommandLineIcon className="h-7 w-7" />
        </NavItem>

        <NavItem href="/users" label="Users">
          <UsersIcon className="h-7 w-7" />
        </NavItem>

        <NavItem href="#" label="Analytics">
          <PaintBrushIcon className="h-7 w-7" />
        </NavItem>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <SettingsIcon className="h-7 w-7" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}

function DropdownIcon() {
  return <UserCircleIcon className="h-7 w-7 cursor-pointer" />;
}

function DropdownNavLink(text: string, href: string, key: number) {
  return (
    <a
      href={href}
      className="block m-2 p-2 hover:bg-orange-400 border border-gray-800 rounded bg-gray-100 text-gray-900 whitespace-nowrap"
      key={key}
    >
      {text}
    </a>
  );
}