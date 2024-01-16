import Header from "../components/Header";
import Footer from "../components/Footer";
import InternationalStudent from "../components/InternationalStudent";
import { useEffect } from "react";

function InternationalStudentPage() {
    useEffect(() => {
        document.title = "404 Error";
    }, []);

    return (
        <>
            <Header />
            <InternationalStudent />
            <Footer />
        </>
    );
}

export default InternationalStudentPage;
