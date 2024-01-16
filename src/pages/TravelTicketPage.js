import Header from "../components/Header";
import Footer from "../components/Footer";
import TravelTicket from "../components/TravelTicket";
import { useEffect } from "react";

function TravelTicketPage() {
    useEffect(() => {
        document.title = "VÉ DỊCH VỤ";
    }, []);
    return (
        <>
            <Header />
            <TravelTicket />
            <Footer />
        </>
    );
}

export default TravelTicketPage;
