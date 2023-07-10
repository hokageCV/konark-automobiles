"use client";

export const dynamic = "force-dynamic"; // fix for 'working in dev not in prod'

import ProductCard from "@/components/ProductCard";
import SearchBox from "@/components/SearchBox";
import useDataStore from "@/hooks/useDataStore";
import Navbar from "../components/Navbar";

export default function Home() {
    const { Data } = useDataStore();

    return (
        <div>
            <Navbar />
            <main className="flex flex-col items-center justify-center p-6">
                <SearchBox />
                <div className="items-center mt-6 ">
                    {Data?.length > 0 &&
                        Data.map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
            </main>
        </div>
    );
}
