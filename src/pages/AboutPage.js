import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import { useEffect } from "react";

function AboutPage() {
    useEffect(() => {
        document.title = "Mô Tả Dịch Vụ Của DingDing";
    }, []);
    return (
        <>
            <Header />
            <About />
            <Footer />
        </>
    );
}

export default AboutPage;
