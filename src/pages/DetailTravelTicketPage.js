import Header from "../components/Header";
import DetailTravelTicket from "../components/DetailTravelTicket";
import Footer from "../components/Footer";
import { useEffect } from "react";

function DetailTravelTicketPage() {
    useEffect(() => {
        document.title = "CHI TIẾT VÉ DU LỊCH";
    }, []);
    return (
        <>
            <Header />
            <DetailTravelTicket />
            <Footer />
        </>
    );
}

export default DetailTravelTicketPage;
