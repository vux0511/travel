import Header from "../components/Header";
import AirlineTicket from "../components/AirlineTicket";
import Footer from "../components/Footer";
import { useEffect } from "react";

function AirlineTicketPage() {
    useEffect(() => {
        document.title = "ĐẶT VÉ MÁY BAY";
    }, []);

    return (
        <>
            <Header />
            <AirlineTicket />
            <Footer />
        </>
    );
}

export default AirlineTicketPage;
