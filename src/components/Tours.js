import TourCard from "./TourCard";

function Tours({ title, desc }) {
    return (
        <div className="container">
            <div className="tours">
                <div className="tours__header">{title}</div>
                <div className="tours__desc">{desc}</div>
                <div className="tours__wrapper">
                    <TourCard />
                </div>
            </div>
        </div>
    );
}

export default Tours;
