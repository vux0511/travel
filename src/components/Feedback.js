import { IoStar } from "react-icons/io5";

function Feedback() {
    return (
        <div className="feedback swiper-slide">
            <div className="feedback__item">
                <img
                    src="https://projecthotmess.com/wp-content/uploads/2021/12/SML-15-Benefits-Of-Self-Confidence-How-To-Increase-Yours-3.jpeg.webp"
                    alt=""
                    className="feedback__image"
                />
                <div className="feedback__name">Hoàng Văn Vũ</div>
                <div className="feedback__position">Vị trí chức vụ</div>
                <div className="feedback__rating">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                </div>
                <div className="feedback__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam fugit harum ea porro odit aliquid magnam, nobis
                    assumenda voluptatibus praesentium modi tempora animi
                    debitis quos et recusandae. Odio, autem laudantium?
                </div>
            </div>
        </div>
    );
}

export default Feedback;
