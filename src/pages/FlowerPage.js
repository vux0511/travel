import Header from "../components/Header";
import Footer from "../components/Footer";
import Flower from "../components/Flower";
import { useEffect } from "react";

function FlowerPage() {
    useEffect(() => {
        document.title = "HOA TƯƠI DINGDING";
    }, []);

    return (
        <>
            <Header />
            <Flower />
            <Footer />
        </>
    );
}

export default FlowerPage;
