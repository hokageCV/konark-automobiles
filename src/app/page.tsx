import SearchBox from "@/components/SearchBox";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="flex flex-col items-center justify-center p-6">
                <SearchBox />
            </main>
        </div>
    );
}
