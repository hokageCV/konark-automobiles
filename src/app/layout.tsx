import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Konark Automobiles",
    description: "search for clips in the clip database of konark automobiles",
    icons: {
        icon: "/sun.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="font-mono box-border bg-baseBG">
            <body>{children}</body>
        </html>
    );
}
