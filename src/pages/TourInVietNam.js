import Header from "../components/Header";
import Footer from "../components/Footer";
import Category from "../components/Category";
import TourCard from "../components/TourCard";
import { useState, useEffect } from "react";
import axios from "axios";
import {
    Navigate,
    useNavigate,
    useLocation,
    useParams,
} from "react-router-dom";
import URL from "../api/URL";

function TourInVietNam() {
    const [activeCategoryId, setActiveCategoryId] = useState("allCategory");
    const [category, setCategory] = useState([]);
    const [nameCategory, setNameCategory] = useState("");
    const [tourCards, setTourCards] = useState([]);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const location = useLocation();

    const params = useParams();

    useEffect(() => {
        axios
            .get(URL.URL_getCategoryByID, {
                params: { idCategory: params.idCategory },
            })
            .then((res) => {
                if (res.data) {
                    setCategory(res.data);
                    console.log(res.data);
                }
            });
    }, [params]);

    return (
        <>
            <Header />
            {/* <div className="tour-in-vietnam"> */}
            <div className="container tour__trongnuoc">
                {category.map((nameCategory) => (
                    <>
                        <div className=" visa__line tour__trongnuoc-title">
                            {nameCategory.nameCategory}
                        </div>
                        <p>{nameCategory.descCategory}</p>
                    </>
                ))}
            </div>
            <Category />
            {/* <TourCard /> */}
            {/* </div> */}
            <Footer />
        </>
    );
}

export default TourInVietNam;
