import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Clip",
    description: "search for clips",
    icons: {
        icon: "/sun.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="font-mono box-border bg-base-700">
            <body>{children}</body>
        </html>
    );
}
