import Header from "../components/Header";
import Review from "../components/Review";
import Footer from "../components/Footer";
import { useEffect } from "react";

function ReviewPage() {
    useEffect(() => {
        document.title = "ĐÁNH GIÁ";
    }, []);
    return (
        <>
            <Header />
            <Review />
            <Footer />
        </>
    );
}

export default ReviewPage;
