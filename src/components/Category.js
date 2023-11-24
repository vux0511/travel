import TourCard from "../components/TourCard";

function Category() {
    return (
        <section className="category container">
            <div className="category__list">
                <div className="category__title">Danh Mục Tour</div>
                <div className="category__name">Tour Trong Nước</div>
                <div className="category__name">Tour Miền Bắc</div>
                <div className="category__name">Tour Miền Trung</div>
                <div className="category__name">Tour Trải Nghiệm</div>
                <div className="category__name">Tour Nước Ngoài</div>
                <div className="category__name">Tour Châu Á</div>
                <div className="category__name">Tour Châu Âu</div>
                <div className="category__name">Tour Châu Úc</div>
                <div className="category__name">Tour Mỹ – Canada – Cuba</div>
            </div>
            <div className="category__item">
                <div className="category__card">
                    <TourCard />
                </div>
                <div className="category__card">
                    <TourCard />
                </div>
                <div className="category__card">
                    <TourCard />
                </div>
                <div className="category__card">
                    <TourCard />
                </div>
                <div className="category__card">
                    <TourCard />
                </div>
            </div>
        </section>
    );
}

export default Category;
