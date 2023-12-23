'use client';

import React from "react";
import {Repo} from "@/components/component/repo";
import Header from "@/components/component/header";

export default function Home() {
    return (
        <div key="1" className="bg-gray-900 text-white">
            <Header/>
            <Repo/>
        </div>
    )
}