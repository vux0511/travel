import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useEffect } from "react";

function ContactPage() {
    useEffect(() => {
        document.title = "LIÊN HỆ";
    }, []);
    return (
        <>
            <Header />
            <Contact />
            <Footer />
        </>
    );
}

export default ContactPage;
