import SearchBox from "@/components/SearchBox";
import Navbar from "../components/Navbar";

export default function Home() {
    // const product: Product = {
    //     productId: "SI 1773",
    //     name: "DOOR TRIM",
    //     mrp: 100,
    //     cars: "alto, honda",
    //     imgLink: "https://loremflickr.com/320/240",
    // };

    return (
        <div>
            <Navbar />
            <main className="flex flex-col items-center justify-center p-6">
                <SearchBox />
                {/* <div className="items-center mt-6 ">
                    <ProductCard product={product} />
                </div> */}
            </main>
        </div>
    );
}
