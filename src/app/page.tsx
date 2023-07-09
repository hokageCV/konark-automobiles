"use client";

import ProductCard from "@/components/ProductCard";
import SearchBox from "@/components/SearchBox";
import useDataStore from "@/hooks/useDataStore";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
    const { Data } = useDataStore();

    useEffect(() => {
        console.log("heres full data :", Data);
        console.log("heres first data :", Data[0]);
    }, [Data]);

    return (
        <div>
            <Navbar />
            <main className="flex flex-col items-center justify-center p-6">
                <SearchBox />
                <div className="items-center mt-6 ">
                    {Data.length > 0 && Data.map((product) => <ProductCard product={product} />)}
                </div>
            </main>
        </div>
    );
}
