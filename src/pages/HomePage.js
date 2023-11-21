import Header from "../components/Header";
import Slider from "../components/Slider";
import Tours from "../components/Tours";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <Slider />
            <Tours
                title={"Tour Nước Ngoài Nổi Bật"}
                desc={
                    "ĐƯỢC TUYỂN CHỌN BỞI CÁC CHUYÊN GIA DU LỊCH CỦA CHÚNG TÔI"
                }
            />
            <Footer />
        </>
    );
}

export default Home;
