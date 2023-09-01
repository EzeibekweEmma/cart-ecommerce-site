import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
    title: "CART - Online Shopping Store",
    description: "Created with Next.js and Tailwind CSS By Ezeibekwe Emmanuel",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-cGray w-screen overflow-x-hidden">
            <body className="flex flex-col justify-between min-h-screen">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
