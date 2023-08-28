import Banner from "@/components/Banner";
import Products from "@/components/product/Products";

export default function Home() {
    return (
        <main className="">
            <Banner />
            <section className="flex justify-center relative -mt-60 z-20 mb-10">
                <Products />
            </section>
        </main>
    );
}
