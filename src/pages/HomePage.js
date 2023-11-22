import Header from "../components/Header";
import Slider from "../components/Slider";
import Tours from "../components/Tours";
import Footer from "../components/Footer";
import SliderBottom from "../components/SliderBottom";

function Home() {
    return (
        <>
            <Header />
            <Slider />
            <SliderBottom />
            <Tours
                title={"Tour Trong Nước Nổi Bật"}
                desc={
                    "ĐƯỢC TUYỂN CHỌN BỞI CÁC CHUYÊN GIA DU LỊCH CỦA CHÚNG TÔI"
                }
            />
            <Footer />
        </>
    );
}

export default Home;
