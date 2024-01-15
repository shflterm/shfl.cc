/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/CZdMfJMAW4r
 */
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {JSX, SVGProps} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import DownloadBtn from "@/components/component/downloadBtn";
import AppCard from "@/components/component/AppCard";
import Header from "@/components/component/header";
import Console from "@/components/component/console";

function DownloadShuffle() {
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
                        <DownloadBtn className="space-y-2"/>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}

function GreetingSection() {
    return (
        <div className="mb-80">
            <Header/>
            <section id="greeting" className="w-full py-12 h-screen">
                <div className="container space-y-12 px-4 md:px-6 mx-auto">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] h-[75vh]">
                        <Console className="h-auto"></Console>
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
                                <DownloadShuffle/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function KeyFeaturesSection() {
    return (
        <section id="key-features" className="w-full py-12 md:py-24 lg:py-32 h-screen">
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
    const apps = [
        {title: "File System", id: "filesystem", description: "Collection of commands related to file system"},
        {title: "Text Utilities", id: "textutilities", description: "Collection of commands related to text manipulation"},
        {title: "Date and Time", id: "dateandtime", description: "Collection of commands related to date or time"},
        {title: "Unit Converter", id: "unitconverter", description: "Collection of commands related to unit conversion"},
    ];

    return (
        <section id="key-apps" className="w-full py-12 md:py-24 lg:py-32 h-screen">
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
                    {apps.map(value => {
                        return <AppCard key={value.id} title={value.title} id={value.id}
                                        description={value.description}/>;
                    })}
                </div>
            </div>
        </section>
    );
}

function LearningSection() {
    return (
        <section id="learning" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 h-[40vh]">
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
        <div className="bg-gray-900 text-white">
            <GreetingSection/>
            <KeyFeaturesSection/>
            <KeyAppsSection/>
            <LearningSection/>
            <Footer/>
        </div>
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
