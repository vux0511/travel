import Header from "../components/Header";
import Footer from "../components/Footer";
import Teambuilding from "../components/Teambuilding";
import { useEffect } from "react";

function TeambuildingPage() {
    useEffect(() => {
        document.title = "DU LỊCH TEAM BUILDING";
    }, []);

    return (
        <>
            <Header />
            <Teambuilding />
            <Footer />
        </>
    );
}

export default TeambuildingPage;
