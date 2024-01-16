import Header from "../components/Header";
import DetailNews from "../components/DetailNews";
import Footer from "../components/Footer";
import { useEffect } from "react";

function DetailNewsPage() {
    useEffect(() => {
        document.title = "TIN TỨC";
    }, []);
    return (
        <>
            <Header />
            <DetailNews />
            <Footer />
        </>
    );
}

export default DetailNewsPage;
