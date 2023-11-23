import Header from "../components/Header";
import Slider from "../components/Slider";
import Tours from "../components/Tours";
import Footer from "../components/Footer";
import SliderBottom from "../components/SliderBottom";
import Steps from "../components/Steps";
import Introduce from "../components/Introduce";
import Total from "../components/Total";
import ChooseUs from "../components/ChooseUs";
import Brand from "../components/Brand";
import Contact from "../components/Contact";
import Vision from "../components/Vision";

function Home() {
    return (
        <>
            <Header />
            <Slider />
            <SliderBottom />
            <Tours
                title={"Tour Du Lịch Hấp Dẫn Nhất"}
                desc={
                    "ĐƯỢC TUYỂN CHỌN BỞI CÁC CHUYÊN GIA DU LỊCH CỦA CHÚNG TÔI"
                }
            />
            <Tours
                title={"Tour Trong Nước Nổi Bật"}
                desc={"ĐƯỢC KHÁCH HÀNG LỰA CHỌN NHIỀU NHẤT NĂM 2023"}
            />
            <Steps />
            <Introduce />
            {/* <Total /> */}
            <ChooseUs />
            <Vision />
            <Brand />
            {/* <Contact /> */}
            <Footer />
        </>
    );
}

export default Home;
