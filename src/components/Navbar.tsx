export default function Navbar() {
    return (
        <div className="navbar bg-red-800">
            <div className="flex-none">
                <img src="/sun.png" width={40} height={40} className="m-1 mr-2"></img>
            </div>
            <div className="flex-1">
                <p className=" normal-case text-xl">Clip</p>
            </div>
        </div>
    );
}
