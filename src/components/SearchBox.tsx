"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchBox() {
    const [id, setId] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (id.trim() === "") {
            setError(true);
            setErrorMessage("Error! Please Enter ID");
            return;
        }

        const response = await axios.get(`api/sheet?productId=${id}`);
        setId("");
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(false);
            }, 5 * 1000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    return (
        <div className="form-control bg-horizon-700 w-full max-w-xs items-center border border-4 border-horizon-900 p-2 rounded-lg">
            <label className="label">
                <span className="label-text text-lg">Enter Product ID</span>
            </label>
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs bg-horizon-800 m-1"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button
                className="btn max-w-max py-0.5 px-4 bg-horizon-900 border-2 border-sky-950"
                onClick={(e) => handleSubmit(e)}
            >
                Search
            </button>

            {error && (
                <div className="alert alert-error mt-2 p-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="text-sm">{errorMessage}</span>
                </div>
            )}
        </div>
    );
}
