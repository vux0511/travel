import Header from "../components/Header";
import Events from "../components/Events";
import Footer from "../components/Footer";
import { useEffect } from "react";

function EventPage() {
    useEffect(() => {
        document.title = "EVENTS - MEETING - GALA DINNER";
    }, []);
    return (
        <>
            <Header />
            <Events />
            <Footer />
        </>
    );
}

export default EventPage;
