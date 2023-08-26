import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
    title: "E-commerce Site",
    description: "Created with Next.js and Tailwind CSS By Ezeibekwe Emmanuel",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-cGray">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
