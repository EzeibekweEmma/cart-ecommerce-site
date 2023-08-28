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
        <html lang="en" className="bg-cGray">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
