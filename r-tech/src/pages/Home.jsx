import Footer from "../components/Footer/Footer";
import HeroSection from "../components/Hero/HeroSection";
import HotProduct from "../components/HotProduct/HotProduct";
import ProductSection from "../components/ProductsSection/ProductSection";


function Home() {
    return (
        <>
            <HeroSection />
            <ProductSection />
            <HotProduct />
            <Footer />

        </>
    )
}

export default Home;