import SaveImage from "../assets/save-image.svg";
import LuxuryImage from "../assets/luxury-image.svg";
import HighClassImage from "../assets/high-class-image.svg";

function SliderBottom() {
    return (
        <>
            <section className="container">
                <div className="sliderbottom">
                    <div className="sliderbottom__item">
                        <img
                            src={LuxuryImage}
                            alt=""
                            className="sliderbottom__image"
                        />
                        <div className="sliderbottom__text">LUXURY</div>
                    </div>
                    <div className="sliderbottom__item">
                        <img
                            src={HighClassImage}
                            alt=""
                            className="sliderbottom__image"
                        />
                        <div className="sliderbottom__text">CAO CẤP</div>
                    </div>
                    <div className="sliderbottom__item">
                        <img
                            src={SaveImage}
                            alt=""
                            className="sliderbottom__image"
                        />
                        <div className="sliderbottom__text">TIÊU CHUẨN</div>
                    </div>
                </div>
            </section>
            <div className="shadow"></div>
        </>
    );
}

export default SliderBottom;
