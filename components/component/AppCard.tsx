import React, {useEffect, useState} from "react";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
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
            <Card className="bg-gray-800 text-white h-full">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <Button onClick={copyToClipboard} className="align-bottom">
                    <code
                        className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg mb-8 mr-4">
                                    <span className="flex gap-2">
                                        <span className="text-blue-500">(~)</span>
                                        <span className="text-yellow-500">-{'>'}</span>
                                        <span>appmgr</span>
                                        <span>add</span>
                                        <span className="text-yellow-500">{id}</span>
                                    </span>
                    </code>
                </Button>
            </Card>
            <div className={"bg-gray-700 w-fit mt-3 p-2 rounded-lg absolute " +
                `transition-all duration-200 ${isCopied ? "opacity-100" : "opacity-0"}`}>Copied!</div>
        </div>
    );
};

export default AppCard;