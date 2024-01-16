import Header from "../components/Header";
import RentCar from "../components/RentCar";
import Footer from "../components/Footer";
import { useEffect } from "react";

function RentCarPage() {
    useEffect(() => {
        document.title = "THUÊ XE";
    }, []);
    return (
        <>
            <Header />
            <RentCar />
            <Footer />
        </>
    );
}

export default RentCarPage;
