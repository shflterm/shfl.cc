import React, {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";

interface AppProps {
    title: string;
    id: string;
    description: string;
}

const AppCard: React.FC<AppProps> = ({title, id, description}) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            // Copy text to clipboard
            await navigator.clipboard.writeText('appmgr add ' + id);
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000); // 2000 milliseconds (2 seconds)
        } catch (err) {
        }
    };

    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <div>
            <Card className="bg-gray-800 text-white">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
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
                                        <span className="text-yellow-500">{id}</span>
                                    </span>
                            <Button onClick={copyToClipboard}>Copy</Button>
                        </code>
                        {isCopied && <span>Copied!</span>}
                    </PopoverContent>
                </Popover>
            </Card>
        </div>
    );
};

export default AppCard;