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
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../api/URL";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
    const [tours, setTours] = useState([]);
    const [category, setCategory] = useState([]);
    const [topTours, setTopTours] = useState([]);
    const [newTours, setNewTours] = useState([]);
    const navigate = useNavigate();
    const { categoryId } = useParams();

    // Top Tourss
    useEffect(() => {
        axios.get(URL.URL_getTopTour).then((response) => {
            setTopTours(response.data);
        });
    }, []);

    // NEW Tourss
    useEffect(() => {
        axios.get(URL.URL_getNewTour).then((response) => {
            setNewTours(response.data);
        });
    }, []);

    useEffect(() => {
        document.title = "TRANG CHỦ - DINGDING";
    }, []);

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
                topTours={topTours}
            />
            <Tours
                title={"Tour Mới Nhất"}
                desc={"TỔNG HỢP NHỮNG TOUR MỚI NHẤT CỦA 2023"}
                topTours={newTours}
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
