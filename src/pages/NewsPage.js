import Header from "../components/Header";
import News from "../components/News";
import Footer from "../components/Footer";
import { useEffect } from "react";

function NewsPage() {
    useEffect(() => {
        document.title = "TIN TỨC";
    }, []);
    return (
        <>
            <Header />
            <News />
            <Footer />
        </>
    );
}

export default NewsPage;
