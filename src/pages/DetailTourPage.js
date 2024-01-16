import Header from "../components/Header";
import Detail from "../components/Detail";
import Footer from "../components/Footer";
import { useEffect } from "react";

function DetailTourPage() {
    useEffect(() => {
        document.title = "CHI TIẾT TOUR";
    }, []);
    return (
        <>
            <Header />
            <Detail />
            <Footer />
        </>
    );
}

export default DetailTourPage;
