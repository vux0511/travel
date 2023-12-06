import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import URL from "../api/URL";
import TourCard from "../components/TourCard";

function Category() {
    const [activeCategoryId, setActiveCategoryId] = useState("allCategory");
    const [category, setCategory] = useState([]);
    const [nameCategory, setNameCategory] = useState("");
    const [tourCards, setTourCards] = useState([]);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const location = useLocation();

    const params = useParams();

    const handleClick = (id) => {
        setActiveCategoryId(id);
        navigate(`/tour-trong-nuoc/category/${id}`);
    };

    useEffect(() => {
        axios.get(URL.URL_getCategory).then((res) => {
            setCategory(res.data);
        });
    }, []);

    useEffect(() => {
        axios
            .get(URL.URL_getTourCategory, {
                params: { idcategory: params.idCategory },
            })
            .then((res) => {
                if (res.data) {
                    setTourCards(res.data);
                }
            });
    }, [params]);

    return (
        <section className="category container">
            <div className="category__list">
                <div className="category__title">Danh Mục Tour</div>
                {category.map((cate) => (
                    <div
                        className="category__name"
                        onClick={() => handleClick(cate.idCategory)}
                        key={cate.idCategory}
                    >
                        {cate.nameCategory}
                    </div>
                ))}
            </div>
            <div className="category__item">
                {/* {category.map((tourTitle, index) => (
                    <>
                        <div className="category__item-title">
                            {tourTitle.nameCategory}
                        </div>
                        <p className="category__item-desc">
                            {tourTitle.descCategory}
                        </p>
                    </>
                ))} */}
                {tourCards.map((tourCard, index) => (
                    <>
                        <div className="category__card" key={index}>
                            <a href={`/detail-tour/idTour/${tourCard.idTour}`}>
                                <TourCard tourCard={tourCard} />
                            </a>
                        </div>
                    </>
                ))}
            </div>
        </section>
    );
}

export default Category;
