/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/CZdMfJMAW4r
 */
import Link from "next/link"
import {NavigationMenu, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {JSX, SVGProps} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import DownloadBtn from "@/components/component/downloadBtn";

function TryShuffle() {
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-700 px-8 text-sm font-medium text-gray-200 shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                    >
                        Download
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-amber-50">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Download Shuffle</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Select the appropriate OS below and the download will begin.
                            </p>
                        </div>
                        <DownloadBtn className="space-y-2" />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}

function Header() {
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
            <Link className="mr-6 hidden lg:flex" href="#">
                <ShuffleIcon className="h-6 w-6"/>
                <span className="sr-only">Shuffle</span>
            </Link>
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                    <NavigationMenuLink asChild>
                        <Link
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50 dark:data-[active]:bg-gray-700/50 dark:data-[state=open]:bg-gray-700/50"
                            href="#"
                        >
                            Features
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50 dark:data-[active]:bg-gray-700/50 dark:data-[state=open]:bg-gray-700/50"
                            href="#"
                        >
                            Documentation
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
                </NavigationMenuList>
            </NavigationMenu>
            <div className="ml-auto">
                <Button className="bg-white text-gray-900">Get Started</Button>
            </div>
        </header>
    );
}

function GreetingSection() {
    return (
        <section className="w-full py-12">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <a href="#">
                        <img
                            alt="Shuffle Hero"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                            height="550"
                            src="/placeholder.svg"
                            width="550"
                        />
                    </a>
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Welcome
                                to
                                Shuffle</h1>
                            <p className="max-w-[600px] text-gray-400 md:text-xl">
                                Shuffle offers key features like smart auto-completion, AI natural language
                                processing, scripting
                                capabilities, and a modern user experience to enhance your productivity and
                                streamline your tasks.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <TryShuffle />
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-700 px-8 text-sm font-medium text-gray-200 shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                                href="https://tryshfl.syuk.me"
                            >
                                Try Shuffle (Web)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function KeyFeaturesSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">Key Features</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock the Power of
                            Automation</h2>
                        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Shuffle provides a comprehensive suite of utilities that enable you to automate tasks,
                            manage systems,
                            and streamline processes.
                        </p>
                    </div>
                </div>
                <div
                    className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">🎯 Smart Auto-completion</h3>
                        <p className="text-sm text-gray-400">
                            Save time and effort with intelligent auto-completion for commands and file paths.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">🧠 AI Natural Language Processing</h3>
                        <p className="text-sm text-gray-400">
                            Benefit from advanced language processing to receive command hints and interactive help.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">📜 Scripting Capabilities</h3>
                        <p className="text-sm text-gray-400">
                            Automate repetitive tasks and boost productivity with built-in scripting capabilities.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">🌐 Modern User Experience</h3>
                        <p className="text-sm text-gray-400">
                            Enjoy a sleek and intuitive user interface for a seamless and delightful experience.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-700 px-8 text-sm font-medium text-gray-200 shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                        href="#"
                    >
                        Explore Features
                    </Link>
                </div>
            </div>
        </section>
    );
}

function KeyAppsSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">🚀 App Creation and
                            Distribution</h2>
                        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            With Shuffle, creating and distributing your applications has never been easier.
                        </p>
                        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Shuffle's intuitive interface and powerful features allow you to focus on building your
                            app while we
                            handle the distribution.
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ext-white">
                    <Card className="bg-gray-800 text-white">
                        <CardHeader>
                            <CardTitle>Text</CardTitle>
                            <CardDescription>Test</CardDescription>
                        </CardHeader>
                        <Popover>
                            <PopoverTrigger asChild>
                                <CardContent className="text-sm">
                                    <Button
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-700 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-750 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50 dark:data-[active]:bg-gray-700/50 dark:data-[state=open]:bg-gray-700/50"
                                    >
                                        Download
                                    </Button>
                                </CardContent>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 bg-amber-50">
                                <code
                                    className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
                                    <span className="flex gap-2">
                                        <span className="text-blue-500">(~)</span>
                                        <span className="text-yellow-500">-{'>'}</span>
                                        <span>appmgr</span>
                                        <span>add</span>
                                        <span className="text-yellow-500">filesystem</span>
                                    </span>

                                    <Button>
                                        <svg
                                            className="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                                            <path
                                                d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                                            </path>
                                        </svg>
                                    </Button>
                                </code>
                            </PopoverContent>
                        </Popover>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                        <CardHeader>
                            <CardTitle>Test</CardTitle>
                            <CardDescription>Test</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                        <CardHeader>
                            <CardTitle>Test</CardTitle>
                            <CardDescription>Test</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                        <CardHeader>
                            <CardTitle>Test</CardTitle>
                            <CardDescription>Test</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}

function LearningSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
            <div className="container space-y-12 px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">📚 Learning Resources</h2>
                        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Enhance your knowledge and skills with our comprehensive learning resources.
                        </p>
                    </div>
                </div>
                <div
                    className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                    <Link
                        className="grid gap-1 items-center justify-center rounded-md bg-gray-700 px-8 text-sm font-medium text-gray-200 shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                        href="#">
                        <h3 className="mt-5 text-lg font-bold">📘 Documentation</h3>
                        <p className="mb-5 text-sm text-gray-400">
                            Comprehensive and easy-to-understand documentation to help you get started.
                        </p>
                    </Link>
                    <Link
                        className="grid gap-1 items-center justify-center rounded-md bg-gray-700 px-8 text-sm font-medium text-gray-200 shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                        href="#">
                        <h3 className="mt-5 text-lg font-bold">📘🎓 Tutorials</h3>
                        <p className="mb-5 text-sm text-gray-400">
                            Step-by-step guides to help you understand and utilize Shuffle's features effectively.
                        </p>
                    </Link>
                    <Link
                        className="grid gap-1 items-center justify-center rounded-md bg-gray-700 px-8 text-sm font-medium text-gray-200 shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                        href="#">
                        <h3 className="mt-5 text-lg font-bold">🎥 Webinars</h3>
                        <p className="mb-5 text-sm text-gray-400">
                            Learn from experts in our interactive webinars and improve your proficiency.
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-gray-300">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-bold">About</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link className="text-sm hover:text-white" href="#">
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm hover:text-white" href="#">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm hover:text-white" href="#">
                                    News
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Resources</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link className="text-sm hover:text-white" href="#">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm hover:text-white" href="#">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm hover:text-white" href="#">
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Follow Us</h3>
                        <div className="mt-4 flex space-x-4">
                            <Link className="hover:text-white" href="#">
                                <TwitterIcon className="w-5 h-5"/>
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link className="hover:text-white" href="#">
                                <FacebookIcon className="w-5 h-5"/>
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link className="hover:text-white" href="#">
                                <LinkedinIcon className="w-5 h-5"/>
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link className="hover:text-white" href="#">
                                <GithubIcon className="w-5 h-5"/>
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export function Landing() {
    return (
        <div key="1" className="bg-gray-900 text-white">
            <Header/>
            <GreetingSection/>
            <KeyFeaturesSection/>
            <KeyAppsSection/>
            <LearningSection/>
            <Footer/>
        </div>
    )
}


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


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path
                d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
    )
}


function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
    )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
        </svg>
    )
}


function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
    )
}
