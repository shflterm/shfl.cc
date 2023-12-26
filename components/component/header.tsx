import Link from "next/link";
import {NavigationMenu, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu";
import {Button} from "@/components/ui/button";
import {JSX, SVGProps} from "react";


function ShuffleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/>
            <path d="m18 2 4 4-4 4"/>
            <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/>
            <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/>
            <path d="m18 14 4 4-4 4"/>
        </svg>
    )
}

function Header() {
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
            <Link className="mr-6 hidden lg:flex" href="/">
                <ShuffleIcon className="h-6 w-6"/>
                <span className="sr-only">Shuffle</span>
            </Link>
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                    <NavigationMenuLink asChild>
                        <Link
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50 dark:data-[active]:bg-gray-700/50 dark:data-[state=open]:bg-gray-700/50"
                            href="/docs"
                        >
                            Documentation
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50 dark:data-[active]:bg-gray-700/50 dark:data-[state=open]:bg-gray-700/50"
                            href="/"
                        >
                            Tutorials
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50 dark:data-[active]:bg-gray-700/50 dark:data-[state=open]:bg-gray-700/50"
                            href="#"
                        >
                            Community
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50 dark:data-[active]:bg-gray-700/50 dark:data-[state=open]:bg-gray-700/50"
                            href="/repository"
                        >
                            Apps
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="ml-auto">
                <Button className="bg-white text-gray-900">Get Started</Button>
            </div>
        </header>
    );
}

export default Header;