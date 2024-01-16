import Header from "../components/Header";
import Visa from "../components/Visa";
import Footer from "../components/Footer";
import { useEffect } from "react";

function VisaPage() {
    useEffect(() => {
        document.title = "DỊCH VỤ VISA";
    }, []);
    return (
        <>
            <Header />
            <Visa />
            <Footer />
        </>
    );
}

export default VisaPage;
